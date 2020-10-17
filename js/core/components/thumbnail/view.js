import React from "react";
import styles from "./styles";
import Image from "../image";
import Icon from "../icon";
import {Text} from 'react-native';
import {getTextReactNode} from '../util'
/**
 * View
 * @returns {XML}
 */
var view = function () {
    const {source,text, borderRadius, style, icon, iconStyle,iconProps} = this.props;
    let children = null;
    if(source){
        children = null;
    } else {
        //Alphabet handling
        children =   getTextReactNode(text,{
            style : [styles.icon, iconStyle]
        }) || (
            <Icon type="feather" name={icon || 'image'} style={[styles.icon, iconStyle]} {...iconProps}/>
        );
    }
    return (
        <Image
            {...this.props}
            style={[styles.image, {borderRadius: borderRadius}, source ? styles.noBackground : null,style]}
            source={source}
            borderRadius={borderRadius}
            resizeMode={'cover'}
        >
            {
                children
            }
        </Image>
    )
}
module.exports = view
