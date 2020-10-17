// @flow

import React, {
    Component,
    Children,
    cloneElement,
    type ReactElement,
} from 'react'
import {
    View,
    Animated,
    Easing,
    StyleSheet,
    Text,
    ScrollView,
    Dimensions,
    BackAndroid as RNBackAndroid,
    BackHandler as RNBackHandler,
    Platform
} from 'react-native'
import AnimatedOverlay from 'react-native-animated-overlay'
import _ from 'lodash'
import { calculateSize } from './utils'

import Separator from './Separator'

const BackHandler = RNBackHandler || RNBackAndroid

// action sheet states
const ACTION_SHEET_OPENING: string = 'opening'
const ACTION_SHEET_OPENED: string = 'opened'
const ACTION_SHEET_CLOSING: string = 'closing'
const ACTION_SHEET_CLOSED: string = 'closed'

const DEFAULT_ANIMATION_DURATION: number = 180

// action sheet positions
const INITIAL_POSITION_BOTTOM: number = -180
const INITIAL_POSITION_TOP: number = 0

// events
const HARDWARE_BACK_PRESS_EVENT: string = 'hardwareBackPress'

const styles = StyleSheet.create({
    containerTop: {
        flex: 1,
        position: 'absolute',
        backgroundColor: 'white',
        top: INITIAL_POSITION_TOP,
    },
    containerBottom: {
        flex: 1,
        position: 'absolute',
        backgroundColor: 'white',
        bottom: INITIAL_POSITION_BOTTOM,
    },
    container: {
        position: 'absolute',
        flex: 1,
        top: 0,
        bottom: 0,
        left: 0,
    },
    contentContainer: {
        flex: 1,
        position: 'absolute',
        backgroundColor: 'white',
    },
    scrollView: {
        paddingBottom : Platform.OS=="android"?10:0
    },
    actionSheetHeaderText: {
        padding: 10,
        paddingBottom: 15
    },
    actionSheetHeaderTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8
    },
    actionSheetHeaderMessage: {
        textAlign: 'center',
        fontSize: 12,
        color: '#888',
    }
})

type Props = {
    onShow?: () => void;
    onHide?: () => void;
    show?: boolean;
    animationDuration?: number;
    overlayOpacity?: number;
    position?: 'top' | 'bottom';
    style?: any;
    onChange?: () => void;
    multiple?: boolean;
    showSparator?: boolean;
    showSelectedIcon?: boolean;
    value?: any;
    defaultValue?: any;
    hideOnSelceted?: boolean;
    hideOnHardwareBackPress?: boolean;
    children?: any;
};

const defaultProps = {
    onShow: () => {},
    onHide: () => {},
    show: false,
    animationDuration: DEFAULT_ANIMATION_DURATION,
    overlayOpacity: 0.3,
    position: 'bottom',
    style: null,
    onChange: () => {},
    multiple: false,
    showSparator: true,
    showSelectedIcon: true,
    value: null,
    defaultValue: null,
    hideOnSelceted: true,
    hideOnHardwareBackPress: true,
    children: null,
    maxHeight: Dimensions.get('window').height / 2,
}

class ActionSheet extends Component {
    props: Props

    static defaultProps = defaultProps

    constructor (props: Props) {
        super(props)

        const isTop = props.position === 'top'

        let initValue = (props.value || props.defaultValue)
        initValue = Array.isArray(initValue)
            ? initValue
            : (initValue === null && []) || [initValue]

        this.state = {
            show: props.show,
            selectedData: initValue,
            transformOffsetY: new Animated.Value(100000),
            actionSheetState: ACTION_SHEET_CLOSED,
            actionSheetHeight: 0,
        }
    }

    componentDidMount () {
        if (this.props.show) {
            this.show()
        }

        BackHandler.addEventListener(HARDWARE_BACK_PRESS_EVENT, this.hardwareBackPressHandler)
    }

    componentWillReceiveProps (nextProps) {
        if (this.props.show !== nextProps.show) {
            if (nextProps.show) {
                this.show()
            } else {
                this.hide()
            }
        }
    }

    componentWillUnmount () {
        BackHandler.removeEventListener(HARDWARE_BACK_PRESS_EVENT)
        this.hide()
    }

    onOverlayPress = (): void => {
        if (this.state.actionSheetState === ACTION_SHEET_OPENED) {
            this.hide()
        }
    }

    setActionSheetState (toValue: number, callback?: Function = () => {}): void {
        const {animationDuration: duration} = this.props
        const isClosed = (this.state.actionSheetState === ACTION_SHEET_CLOSED)
        let actionSheetState = isClosed ? ACTION_SHEET_OPENING : ACTION_SHEET_CLOSING

        this.setState({actionSheetState})
        //console.log("Hide Called");
        //Laxaar : Use Normalized Height
        Animated.timing(this.state.transformOffsetY, {
            toValue: Dimensions.get('window').height,//toValue,
            duration,
            useNativeDriver: true,
            easing: Easing.inOut(Easing.quad),
        })
            .start(() => {
                const isClosing = (this.state.actionSheetState === ACTION_SHEET_CLOSING)
                actionSheetState = isClosing ? ACTION_SHEET_CLOSED : ACTION_SHEET_OPENED

                this.setState({actionSheetState})
                callback()
            })
    }

    hardwareBackPressHandler = (): boolean => {
        const {hideOnHardwareBackPress} = this.props

        if (hideOnHardwareBackPress && this.state.show) {
            this.hide()
            return true
        }

        return false
    }

    getActionSheetHeight = (e: any): void => {
        const height = e.nativeEvent.layout.height
        //Modified by laxaar - Allowed custom offsetY
        if (height && height !== this.state.actionSheetHeight) {
            this.setState({
                transformOffsetY: new Animated.Value(this.getNormalizedHeight(height)),
                actionSheetHeight: height,
            })
        }
    }

    show = (callback?: Function = () => {}): void => {
        if ([ACTION_SHEET_OPENING, ACTION_SHEET_OPENED].includes(this.state.actionSheetState)) {
            return
        }

        const {onShow, position} = this.props
        const initialPosition = position === 'top'
            ? 0
            : -180

        this.setState({show: true})
        this.setActionSheetState(initialPosition, () => {
            onShow()
            callback()
        })
    }

    hide = (callback?: Function = () => {}): void => {
       // debugger;
        if ([ACTION_SHEET_CLOSING, ACTION_SHEET_CLOSED].includes(this.state.actionSheetState)) {
            return
        }
        const {onHide, position} = this.props

        const toPosition = position === 'top'
            ? -(this.state.actionSheetHeight)
            : this.state.actionSheetHeight

        this.setState({show: false})
        this.setActionSheetState((toPosition), () => {
            onHide()
            callback()
        })
    }
    //Laxaar - Get Normalized Height
    getNormalizedHeight = (height) => {
        const totalHeight = Dimensions.get('window').height
        let {transformOffsetY, position} = this.props
        transformOffsetY = transformOffsetY || 20
        const isTop = position === 'top'
        return isTop ? (-height + totalHeight + transformOffsetY) : (totalHeight - height - transformOffsetY)
    }

    onItemPress = (value, index): void => {
        const {hideOnSelected} = this.props
        if (hideOnSelected) {
            this.hide()
        }
    }

    renderItems (): ReactElement {
        const {children, showSeparator} = this.props
        let propStyles = this.props.styles || {}
        return Children.map(children, (child, index) => {
            let separator
            if (showSeparator) {
                separator = <Separator/>
            }
            const item = cloneElement(child, {
                ...child.props,
                onPress: async (_selectedValue, _selectedIndex) => {
                    //console.log("Item Clicked");
                    this.onItemPress(_selectedValue, _selectedIndex)
                    if (child.props.onPress instanceof Function) {
                        child.props.onPress(_selectedValue, _selectedIndex)
                    }
                },
            });
            return (
                <View style={[propStyles.itemStyle]} key={index}>
                    {item}
                    {separator}
                </View>
            )
        })
    }

    render () {
        const {
            animationDuration,
            overlayOpacity,
            position,
            style,
            maxHeight: _maxHeight,
            title,
            message
        } = this.props
        let propStyles = this.props.styles || {}
        const {
            actionSheetState,
            transformOffsetY,
            actionSheetHeight,
        } = this.state

        const isTop = position === 'top'
        let overlayShow = false
        let pointerEvents = 'none'

        if ([ACTION_SHEET_OPENED, ACTION_SHEET_OPENING].includes(actionSheetState)) {
            overlayShow = true
            pointerEvents = 'auto'
        }

        const width = {width: Dimensions.get('window').width}

        let itemsStyle = isTop
            ? {paddingTop: 30}
            : null

        const actionSheetStyle = isTop
            ? styles.containerTop
            : styles.containerBottom

        let scrollViewStyle
        const maxHeight = calculateSize({height: _maxHeight}).height
        if (actionSheetHeight > maxHeight) {
            scrollViewStyle = {height: maxHeight}
        }

        return (
            <View style={[styles.container, propStyles.mainContainer]}>
                <AnimatedOverlay
                    onPress={this.onOverlayPress}
                    overlayShow={overlayShow}
                    duration={animationDuration}
                    opacity={overlayOpacity}
                    pointerEvents={pointerEvents}
                    useNativeDirver
                />
                <Animated.View
                    style={[
                        actionSheetStyle,
                        style,
                        width,
                        {
                            transform: [{translateY: transformOffsetY}],
                            top: 0,
                            left: 0,
                            backgroundColor: '#FFF'
                        },
                        propStyles.customActionSheetView
                    ]}
                >
                    <ScrollView style={[styles.scrollView, scrollViewStyle, propStyles.scrollViewStyle]}>
                        <View onLayout={this.getActionSheetHeight} style={[itemsStyle, propStyles.itemsContainer]}>
                            <View style={[styles.actionSheetHeaderText, propStyles.actionSheetHeaderText]}>
                                {
                                    (title && title!='')?(
                                        <Text style={[styles.actionSheetHeaderTitle, propStyles.actionSheetHeaderTitle]}>
                                            {title || ''}
                                        </Text>
                                    ):null
                                }
                                {
                                    (message && message!='')?(
                                        <Text style={[styles.actionSheetHeaderMessage, propStyles.actionSheetHeaderMessage]}>
                                            {message || ''}
                                        </Text>
                                    ):null
                                }

                            </View>
                            <View style = {[propStyles.itemsStyle]}>
                                {this.renderItems()}
                            </View>
                        </View>
                    </ScrollView>
                </Animated.View>
            </View>
        )
    }
}

export default ActionSheet
