import React from "react";
import styles from "./styles";
import {Text, TouchableHighlight, View} from "react-native";
import Icon from "../../../core/components/icon";

var view = function () {
    const {translate} = this.props
    return (
        <TouchableHighlight underlayColor="transparent" onPress={this.onPress.bind(this)}>
            <View style={[styles.drawerNavItem]}>
                {this.props.item.icon ? (<Icon type="feather" name={this.props.item.icon} size={25} color="#fff"
                                               style={[styles.drawerNavItemIcon]}/>) : null}
                <View>
                    <Text style={styles.drawerItemText}>{translate(this.props.item.title)}</Text>
                    {
                        this.props.item.new ? (

                            <Icon type="foundation" style={[styles.newIcon]} name='burst-new'/>
                        ) : null
                    }
                </View>
            </View>
        </TouchableHighlight>
    )
}
module.exports = view
