import React from "react";
import styles from "./styles";
import {View} from "react-native";
import {Badge} from "antd-mobile-rn";
import {getModifiedProps,mergeStyles} from '../../util';
/**
 * Get Combined styles from props and antd
 * @param props
 * @returns {*}
 */
export function getCombinedStyles(props) {
    let {contentStyle, corner, dot} = props
    contentStyle = contentStyle || {};
    const badgeCls = corner ? 'textCorner' : 'textDom';
    let {size} = props;
    size = size || 'small';
    let customStyle = {};
    if (dot) {
        customStyle['dotSize' + size] = contentStyle;
    } else {
        customStyle['' + badgeCls + size] = contentStyle;
    }
    return mergeStyles("badge",customStyle);
}
/**
 * View
 * @returns {XML}
 */
var view = function () {
    const {content,containerStyle} = this.props;
    return (
        <View style={[styles.container,containerStyle]}>
            <Badge
                {...getModifiedProps(this.props,["styles","type","content","containerStyle"])}
                styles={getCombinedStyles(this.props)}
            >
                {content}
            </Badge>
        </View>
    );
};
module.exports = view;
