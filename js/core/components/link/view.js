import React from "react";
import styles from "./styles";
import {Text, TouchableHighlight, View} from "react-native";

var view = function () {
    let {textStyle, style, text, children} = this.props
    let markUp = null

    if (children) {
        markUp = children
    } else {
        markUp = (<Text style={[styles.text, textStyle]}>{text}</Text>)
    }
    return (
        <TouchableHighlight underlayColor='transparent'
                            style={[styles.container, style]}
                            onPress={this.onPress.bind(this)}>
            <View>
                {markUp}
            </View>
        </TouchableHighlight>
    )
}
module.exports = view
