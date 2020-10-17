import React from 'react'
import styles from './styles'
import {View, Text} from 'react-native'
import Slider from '../main'
import {Colors} from 'arivaa-basic/styles';
import Diamond from '../../../assets/diamond.png';
import Ruby from '../../../assets/ruby.png';
/**
 * Slider
 * @returns {XML}
 */
var view = function () {
    return (
        <View style={[styles.container]}>
            <Text style={[styles.description]}>
                The Slider component lets users select a value from a range of values by moving the slider knob. We
                support a slider which can be customized to suit any scenario be it colors, be it animations.
            </Text>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Simple Slider</Text>
                <Slider
                    onChange={this.onChange.bind(this)}
                />
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Range Slider</Text>
                <Slider
                    type = "range"
                    onChange={this.onChange.bind(this)}
                />
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Slider with Custom Thumbs</Text>
                <Slider
                    type = "range"
                    thumbImage = {Ruby}
                    onChange={this.onChange.bind(this)}
                />
                <Slider
                    thumbImage = {Diamond}
                    onChange={this.onChange.bind(this)}
                />
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Slider with Custom Colors</Text>
                <Slider
                    type = "range"
                    thumbColor = {Colors.brandGreen}
                    selectedColor = {Colors.primaryColor}
                    unselectedColor = {Colors.brandFacebook}
                    onChange={this.onChange.bind(this)}
                    formatter = {(value)=>{
                        return value+" USD"
                    }}
                />
                <Slider
                    thumbImage = {Diamond}
                    onChange={this.onChange.bind(this)}
                />
            </View>

        </View>
    )
}
module.exports = view
