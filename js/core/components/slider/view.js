import React from 'react'
import styles from './styles'
import { Text, View } from 'react-native'
import { getModifiedProps } from '../util'
import Slider from 'react-native-slider/src/Slider'
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import { Colors } from 'arivaa-basic/styles'

const customProps = ['thumbType', 'formatter', 'showsText', 'styles']
const customPropsRange = ['thumbType', 'formatter', 'showsText', 'styles']
import { getImage } from '../util'
import Image from '../image'
//Had to declare global to use it inside image marker so
// as to stop it from re-rendering
let imageSource = null
/**
 * View
 * @returns {XML}
 */
var view = function () {
    const {value} = this.state;
    const {sliderLength, style, thumbType, thumbImage, selectedColor, unselectedColor, thumbColor, thumbTouchSize} = this.props
    let {showsText} = this.props
    showsText = showsText || true
    const propStyles = this.props.styles || {}

    switch (this.getType()) {
        case 'single' :
            return (
                <View style={propStyles.container}>
                    {
                        showsText ? (
                            <Text
                                style={[styles.stringStyle, {width: sliderLength || this.config.sliderLength}, propStyles.textStyle]}>{this.getValue()}</Text>
                        ) : null
                    }
                    <Slider
                        minimumTrackTintColor={selectedColor || defaultStyles.selectedColor}
                        maximumTrackTintColor={unselectedColor || defaultStyles.unselectedColor}
                        thumbTintColor={thumbColor || defaultStyles.thumbColor}
                        {...getModifiedProps(this.props, customProps)}
                        minimumValue={this.getMin()}
                        maximumValue={this.getMax()}
                        step={this.getStep()}
                        onValueChange={this.onChange.bind(this)}
                        value={value}
                        style={[styles.container, style, propStyles.container]}
                        thumbStyle={[styles.thumbContainer, propStyles.thumbContainer]}
                        thumbImageProps={{
                            style: [styles.thumb, propStyles.thumb],
                            resizeMode: 'contain'
                        }}
                        trackStyle={[styles.track, {
                            width: sliderLength || this.config.sliderLength //Default length for multi
                        }, propStyles.track]}
                        children={null}
                        thumbImage={getImage(thumbImage)}
                        onSlidingStart={this.onSlidingStart.bind(this)}
                        onSlidingComplete={this.onSlidingComplete.bind(this)}
                    />
                </View>
            )
        case 'range' :
            if (thumbImage) {
                imageSource = thumbImage
            }
            return (
                <View style={propStyles.container}>
                    <Text style={[styles.stringStyle, {width: sliderLength || this.config.sliderLength}, propStyles.textStyle]}>{this.getValue()}</Text>
                    <MultiSlider
                        {...getModifiedProps(this.props, customPropsRange)}
                        min={this.getMin()}
                        max={this.getMax()}
                        step={this.getStep()}
                        values={value}
                        onValuesChange={this.onChange.bind(this)}
                        onValuesChangeStart={this.onSlidingStart.bind(this)}
                        onValuesChangeEnd={this.onSlidingComplete.bind(this)}
                        markerContainerStyle={[styles.multiSlider, style, propStyles.container]}
                        markerStyle={[styles.thumb, {
                            backgroundColor: thumbColor || defaultStyles.thumbColor,
                        }, propStyles.thumb]}
                        trackStyle={[styles.track, propStyles.track]}
                        vertical={false}
                        snapped={false}
                        sliderLength={sliderLength || this.config.sliderLength} //Default length for multi
                        customMarker={thumbImage ? ImageMarker : undefined}
                        unselectedStyle={[styles.track, {
                            backgroundColor: unselectedColor || defaultStyles.unselectedColor,
                        }, propStyles.track]}
                        selectedStyle={[propStyles.track, {
                            backgroundColor: selectedColor || defaultStyles.selectedColor
                        }, propStyles.track]}
                        touchDimensions={thumbTouchSize}
                    />
                </View>
            )

    }
}

/**
 * Image Marker component for multi-slider
 */
class ImageMarker extends React.Component {
    shouldComponentUpdate () {
        return false
    }

    render () {
        return <Image source={imageSource} resizeMode={'contain'} style={[styles.thumb]}/>
    }
}

const defaultStyles = {
    thumbColor: Colors.brandLightGrey,
    selectedColor: Colors.primaryColor,
    unselectedColor: Colors.brandLightGrey,
}
const thumbTypeStyles = {
    'circle': {},
    'bar': {}
}
module.exports = view
