import React, { Component } from 'react'
import ComponentView from './view'
import styles from './styles'
import { Text, TouchableHighlight, View } from 'react-native'
import { ActionSheet } from 'antd-mobile-rn'
import { getModifiedProps, mergeObjects } from '../util'
import ActionSheetManager, { ActionSheetItem } from 'react-native-action-sheet-component';
import Thumbnail from '../thumbnail'
import Icon from '../icon'

const supportedTypes = ['normal', 'share']

/**
 * @description Actionsheet Component
 * @type Component
 * @author Inderdeep
 */
class Main extends Component {

    /**
     * Container
     * @param props
     */
    constructor (props) {
        super(props);
        this.showActionSheet = this.showActionSheet.bind(this);

    }

    /**
     * ComponentDidMount Hook
     */
    componentDidMount () {
    }

    /**
     * Show Actionsheet
     */
    showActionSheet () {
        switch (this.getType()) {
            case 'normal':
                return showActionSheetWithOptions(this.props);
                break;
            case  'share':
                return showShareActionSheetWithOptions(this.props);

                break;
        }

    }

    /**
     * Get type of select
     */
    getType () {
        let {type} = this.props
        return getType(type)
    }

    /**
     * NewProps
     * @param newProps
     */
    componentWillReceiveProps (newProps) {

    }

    /**
     * Render Method
     * @returns {*}
     */
    render () {
        return (ComponentView.bind(this))()
    }
}

/**
 * Get Type
 * @param type
 * @returns {string|*}
 */
function getType (type) {
    type = (type || '').toLowerCase()
    if (supportedTypes.indexOf(type) === -1) {
        type = 'normal'
    }
    return type
}

export function getPropsForCustomActionSheet(config){
    config = config || {};
    let options = config.options || [];
    let propStyles = config.styles || {};
    propStyles = {
        customActionSheetView: styles.customActionSheetView,
        ...propStyles
    };
    let newOptions = options.map((option, index) => {
        const props = {
            ...option,
            index,
            key: index,
            text: option.title || '',
            value: option.value || index,
            icon: option.icon,
            onPress: () => {
                if (option.action instanceof Function) {
                    option.action(option, index)
                }
            },
            selectedIcon: null,
            showSelectedIcon: false,
            style: option.style,
            textStyle: option.textStyle
        }
        const Component = option.component
        if (Component) {
            return <Component {...props} styles = {{...option.styles}}/>
        } else {
            return (
                <ActionSheetItem
                    {...props}
                    icon={
                        (typeof props.icon == 'string') ? (
                            <Icon name={props.icon}
                                  style={[styles.actionSheetItemIcon, propStyles.actionItemIcon]}/>
                        ) : props.icon
                    }
                    styles = {{
                        itemContainer: styles.customItemView,
                        itemText: styles.customItemText,
                        ...option.styles
                    }}
                />
            )
        }

    });
    return {
        defaultValue: config.defaultValue || [],
        children: newOptions,
        message: config.message,
        title: config.title,
        showSeparator: false,
        overlayOpacity: config.overlayOpacity || 0.8,
        position: 'bottom',
        styles: propStyles,
        hideOnSelected: config.hideOnSelected == false ? false : true,
        scrollEnabled: config.scrollEnabled || false,
        onHide : ()=>{
            if(config.onHide instanceof Function){
                config.onHide();
            }
        }
    }
}
export function getPropsForCustomShareActionSheet(config){
    config = config || {};
    let options = config.options || [];
    const Item = (props) => {
        let itemPropStyles = props.styles || {}
        return (
            <TouchableHighlight underlayColor='transparent' onPress={props.onPress.bind(this)}>
                <View style={[styles.thumbnailView, itemPropStyles.itemTouchableContainer]}>
                    <Thumbnail
                        borderRadius={0}
                        icon={props.icon}
                        source={props.image}
                        {...props.thumbnailProps}
                        style={[styles.thumbnail, itemPropStyles.thumbnail, props.thumbnailProps ? props.thumbnailProps.style : null]}
                    />
                    {
                        props.text && props.text != '' ? (
                            <Text numberOfLines={props.numberOfLines || 1} style={[styles.thumbnailText, itemPropStyles.itemText]}>{props.text}</Text>
                        ) : null
                    }
                </View>
            </TouchableHighlight>
        )
    };
    return getPropsForCustomActionSheet({
        ...config,
        native: false,
        options: config.hideCancel?options.map((option, index) => {
            return {
                ...option,
                component: Item
            }
        }):options.map((option, index) => {
            return {
                ...option,
                component: Item
            }
        }).concat( {
            title: config.cancelText || 'Cancel',
            style: styles.cancelBtn,
            textStyle: styles.cancelBtnText,
            action: config.onCancel
        }),
        styles: {
            ...config.styles,
            itemsStyle: styles.thumbnailActionSheetView
        }
    })
}

/**
 * Show Action Sheet with options
 * @param options
 * @param callback
 * @returns {*}
 */
function showActionSheetWithOptions (config) {
    config = config || {};
    const native = config && config.native;
    let options = config.options || [];
    if (native) {
        return ActionSheet.showActionSheetWithOptions({
                cancelButtonIndex: options.length - 1,
                destructiveButtonIndex: options.length - 2,
                title: 'Sample Title',
                message: 'Sample Description',
                ...getModifiedProps(config, ['trigger', 'triggerProps', 'style']),
                options: options.map((opt) => {
                    return opt.title || ''
                })
            },
            (buttonIndex) => {
                const buttonIndexNumber = JSON.stringify(buttonIndex)
                if (options[buttonIndexNumber].action && options[buttonIndexNumber].action instanceof Function) {
                    options[buttonIndexNumber].action(options[buttonIndexNumber], buttonIndexNumber)
                }
                if (config.onChange instanceof Function) {
                    config.onChange(options[buttonIndexNumber], buttonIndexNumber)
                }
            })
    } else {

        ActionSheetManager.show(getPropsForCustomActionSheet(config), () => {
            if (config.onShow instanceof Function) {
                config.onShow()
            }
        })
    }

}

function showShareActionSheetWithOptions (config) {
    config = config || {};
    const native = config && config.native;
    const {onError, onSuccess} = config;
    if (native) {
        return ActionSheet.showShareActionSheetWithOptions({
                title: 'Sample Title',
                message: 'Sample Description',
                url: 'http://www.laxaar.com',
                ...getModifiedProps(config, ['trigger', 'triggerProps', 'style']),
            }, (error) => {
                if (onError instanceof Function) {
                    onError.apply(this, arguments)
                }
            }, (completed, method) => {
                if (onSuccess instanceof Function) {
                    onSuccess.apply(this, arguments)
                }
            }
        )
    } else {

        return ActionSheetManager.show(getPropsForCustomShareActionSheet(config), () => {
            if (config.onShow instanceof Function) {
                config.onShow()
            }
        })

    }

}

Main.showActionSheetWithOptions = showActionSheetWithOptions
Main.showShareActionSheetWithOptions = showShareActionSheetWithOptions
Main.hide = function (options) {
    const native = options && options.native
    if (native) {
        return ActionSheet.close()
    } else {
        ActionSheetManager.hide()
    }
}
Main.displayName = 'Action-Sheet-Component'
export default Main
