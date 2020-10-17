import React from "react";

import styles from "./styles";
import {InputItem} from "antd-mobile-rn";
import Icon from "../../icon";
import InputItemStyle from "antd-mobile-rn/lib/input-item/style/index.native";
import {getModifiedProps} from "../../util";
const iconMap = {
    'email': {
        type: 'feather',
        icon: 'mail'
    },
    'password': {
        type: 'feather',
        icon: 'lock'
    },
    'number': {
        type: 'feather',
        icon: 'smartphone'
    },
    'phone': {
        type: 'feather',
        icon: 'phone'
    },
    'bankCard': {
        type: 'feather',
        icon: 'credit-card'
    },
    'default': {
        type: 'feather',
        icon: 'edit-2'
    },

}
/**
 * JSX View
 * @returns {XML}
 */
var view = function () {
    const {keyboardType, placeholder} = this.props
    let {inputProps} = this.props
    let {style} = this.props;
    style = style || {};
    inputProps = inputProps || {};
    let propStyles = {
        ...this.props.styles,
        ...inputProps.styles
    };
    //For backward compatibility merge this.props and inputProps
    const {icon, iconType} = inputProps;
    let input = null;
    inputProps = {
        labelNumber: 1.5,
        placeholder: placeholder,
        ...inputProps,
        ...getModifiedProps(this.props, ["icon", "iconType", "keyboardType", "name",
            "type"]),
        onChange: this.onChange.bind(this),
        value: this.state.value
    };
    /**
     * Style Logic -
     * Direct style will passed will apply as it is is
     * to input styles
     * In styles - icon will apply to icon
     * input will apply to direct text input inside inputitem
     * @type {[*]}
     */
    inputProps.style = [styles.input, style, inputProps.style];
    inputProps.styles = {
        ...InputItemStyle,
        input: {
            ...InputItemStyle.input,
            fontSize: 14,
            ...propStyles.input,

        }
    };
    const iconStyle = [styles.inputIcon, propStyles.icon];
    const iconObj = iconMap[this.getType() || "default"];
    const iconElement = (icon == false) ? null : (inputProps.children || (
        <Icon type={iconType || iconObj.type} style={iconStyle} name={icon || iconObj.icon}/>
    ));
    switch (this.getType()) {
        case 'email' :
            input = (
                <InputItem
                    type="text"
                    keyboardType={keyboardType || 'email-address'}
                    {...inputProps}
                >
                    {iconElement}
                </InputItem>
            );
            break;
        case 'password' :
            input = (
                <InputItem
                    type="password"
                    {...inputProps}
                >
                    {iconElement}
                </InputItem>
            );
            break;
        case 'number' :
            input = (
                <InputItem
                    type="number"
                    {...inputProps}
                >
                    {iconElement}
                </InputItem>
            );
            break;
        case 'phone' :
            input = (
                <InputItem
                    type="phone"
                    {...inputProps}
                >
                    {iconElement}
                </InputItem>
            );
            break;
        case 'bankCard' :
            input = (
                <InputItem
                    type="bankCard"
                    {...inputProps}
                >
                    {iconElement}
                </InputItem>
            );
            break
        default :
            input = (
                <InputItem
                    keyboardType={keyboardType || 'default'}
                    {...inputProps}
                >
                    {iconElement}
                </InputItem>
            );
            break
    }
    return input
}
module.exports = view
