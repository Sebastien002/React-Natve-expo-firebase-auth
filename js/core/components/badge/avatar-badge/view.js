import React from "react";
import CustomBadge from "../custom-badge";
import styles from "./styles";
import {StyleSheet, View} from "react-native";
import {getImage, getModifiedProps} from "../../util";
import Image from "../../image";

/**
 * View
 * @returns {XML}
 */
var view = function () {
    const {dot, text,style,overflowCount, contentStyle, height, width, radius, image, imageContainerStyle, imageProps} = this.props;
    const contentStyles = StyleSheet.flatten(styles.badgeContent);
    const overflow = typeof text=="number" && text>overflowCount;
    return (
        <CustomBadge
            {...getModifiedProps(this.props, ["image", "imageProps", "imageContainerStyle"])}
            dot={dot && true}
            size={'small'}
            style={[styles.badge, style]}
            contentStyle={[styles.badgeStyle,overflow?{
                height : null,
                width : null
            }:null, contentStyle]}
            content={
                <View style={[
                    styles.badgeContent,
                    {
                        height: height || contentStyles.height,
                        width: width || contentStyles.width
                    },
                    image ? {backgroundColor: 'transparent'} : null,
                    imageContainerStyle
                ]}>
                    <Image
                        style={{
                            height: height || contentStyles.height,
                            width: width || contentStyles.width,
                            borderRadius: radius || contentStyles.borderRadius
                        }}
                        {...imageProps}
                        source={getImage(image)}
                    />
                </View>
            }
        />
    )
}
module.exports = view
