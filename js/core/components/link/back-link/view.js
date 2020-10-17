import React from "react";
import styles from "./styles";
import {View} from "react-native";
import Link from "../main";
import Icon from "../../icon";

var view = function () {
    const {style, backIcon} = this.props
    return (
        <Link onPress={this.goBack.bind(this)} style={[styles.backLink]}>
            <View>
                {
                    backIcon || (
                        <Icon type="materialIcons" style={[styles.backIcon, style]} name='keyboard-backspace'/>
                    )
                }
            </View>
        </Link>
    )
}
module.exports = view
