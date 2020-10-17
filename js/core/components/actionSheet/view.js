import React from "react";
import styles from "./styles";
import {TouchableHighlight, View} from "react-native";
import Button from "../button";

var view = function () {
    const {trigger, triggerProps, style} = this.props;
    return trigger ? (
        <TouchableHighlight underlayColor={'transparent'} onPress={this.showActionSheet.bind(this)}>
            {trigger}
        </TouchableHighlight>
    ) : (
        <View>
            <View style={[style]}>
                <Button
                    type="bordered"
                    size="large"
                    text={'Show Action sheet'}
                    {...triggerProps}
                    onClick={this.showActionSheet.bind(this)}
                    style={[styles.button, triggerProps.style]}/>
            </View>
        </View>
    )
};
module.exports = view
