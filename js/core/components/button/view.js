import React from "react";

import styles from "./styles";
import {StyleSheet, Text} from "react-native";
import {Button} from "antd-mobile-rn";
import {getModifiedProps} from "../util";
import ButtonStyle from "antd-mobile-rn/lib/button/style/index.native";

const customProps = []
const antdStyles = ['primary', 'ghost', 'warning']
/**
 * View
 * @returns {XML}
 */
var view = function () {
    const {text, disabled, loading, textStyle, onPress, children} = this.props
    let {style, type, onClick} = this.props
    type = (type || '').toLowerCase()
    let finalStyle = [styles[type], style]
    let defaultTextStyle = [styles[type + 'Text']]
    if (antdStyles.indexOf(type) == -1) {
        type = 'default'
    }
    onClick = onClick || onPress || null
    const transparentColor = StyleSheet.flatten([ButtonStyle[type + 'Highlight'], finalStyle]).backgroundColor
    let modifiedChildren;
    if (children) {
        if (typeof children == "string") {
            modifiedChildren = <Text style={[defaultTextStyle, textStyle]}>{children}</Text>;
        } else {
            modifiedChildren = children;
        }
    } else {
        modifiedChildren = <Text style={[defaultTextStyle, textStyle]}>{text}</Text>
    }
    return (
        <Button
            disabled={disabled}
            loading={loading}
            {...getModifiedProps(this.props, customProps)}
            onClick={onClick}
            style={finalStyle}
            type={type}
            styles={{
                ...ButtonStyle,
                defaultRaw: {
                    ...ButtonStyle.defaultRaw,
                    backgroundColor: transparentColor
                },
                primaryRaw: {
                    ...ButtonStyle.primaryRaw,
                    backgroundColor: transparentColor
                },
                ghostRaw: {
                    ...ButtonStyle.ghostRaw,
                    backgroundColor: transparentColor
                },
                warningHighlight: {
                    ...ButtonStyle.warningHighlight,
                    backgroundColor: transparentColor
                },
                defaultHighlight: {
                    ...ButtonStyle.defaultHighlight,
                    backgroundColor: transparentColor
                },
                primaryHighlight: {
                    ...ButtonStyle.primaryHighlight,
                    backgroundColor: transparentColor
                },
                ghostHighlight: {
                    ...ButtonStyle.ghostHighlight,
                    backgroundColor: transparentColor
                },
                warningHighlight: {
                    ...ButtonStyle.warningHighlight,
                    backgroundColor: transparentColor
                }
            }}
        >
            {modifiedChildren}
        </Button>
    )
}
module.exports = view
