import React from "react";
import styles from "./styles";
import {Text, View} from "react-native";
import Icon from "../index";

var view = function () {
    return (
        <View style={[styles.container]}>
            <Text style={[styles.description]}>
                Icons are graphical content used to add more information to almost anything.
                We provide a big library of icons and support almost every vector supported by expo or react native.
            </Text>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Ionicons</Text>
                <Text style={[styles.message]}>(To view all icons please check Arivaa documentation)</Text>
                <View style={[styles.icons]}>
                    <Icon type="ionicons" style={[styles.icon]} name='md-create'/>
                    <Icon type="ionicons" style={[styles.icon]} name='ios-checkmark-circle-outline'/>
                    <Icon type="ionicons" style={[styles.icon]} name='ios-add'/>
                    <Icon type="ionicons" style={[styles.icon]} name='ios-call'/>
                    <Icon type="ionicons" style={[styles.icon]} name='ios-camera'/>
                    <Icon type="ionicons" style={[styles.icon]} name='ios-checkbox-outline'/>
                    <Icon type="ionicons" style={[styles.icon]} name='ios-cloud-outline'/>
                    <Icon type="ionicons" style={[styles.icon]} name='ios-color-filter'/>
                </View>
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Font Awesome Icons</Text>
                <Text style={[styles.message]}>(To view all icons please check Arivaa documentation)</Text>
                <View style={[styles.icons]}>
                    <Icon type="font-awesome" style={[styles.icon]} name='user'/>
                    <Icon type="font-awesome" style={[styles.icon]} name='bell'/>
                    <Icon type="font-awesome" style={[styles.icon]} name='edit'/>
                    <Icon type="font-awesome" style={[styles.icon]} name='folder'/>
                    <Icon type="font-awesome" style={[styles.icon]} name='phone'/>
                    <Icon type="font-awesome" style={[styles.icon]} name='glass'/>
                    <Icon type="font-awesome" style={[styles.icon]} name='map'/>
                    <Icon type="font-awesome" style={[styles.icon]} name='heart-o'/>
                </View>
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Simple Line Icons</Text>
                <Text style={[styles.message]}>(To view all icons please check Arivaa documentation)</Text>
                <View style={[styles.icons]}>
                    <Icon type="simple-line-icons" style={[styles.icon]} name='user'/>
                    <Icon type="simple-line-icons" style={[styles.icon]} name='people'/>
                    <Icon type="simple-line-icons" style={[styles.icon]} name='clock'/>
                    <Icon type="simple-line-icons" style={[styles.icon]} name='screen-desktop'/>
                    <Icon type="simple-line-icons" style={[styles.icon]} name='wrench'/>
                    <Icon type="simple-line-icons" style={[styles.icon]} name='home'/>
                    <Icon type="simple-line-icons" style={[styles.icon]} name='bubble'/>
                    <Icon type="simple-line-icons" style={[styles.icon]} name='star'/>
                </View>
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Material Icons</Text>
                <Text style={[styles.message]}>(To view all icons please check Arivaa documentation)</Text>
                <View style={[styles.icons]}>
                    <Icon type="materialIcons" style={[styles.icon]} name='account-circle'/>
                    <Icon type="materialIcons" style={[styles.icon]} name='add-circle-outline'/>
                    <Icon type="materialIcons" style={[styles.icon]} name='add-shopping-cart'/>
                    <Icon type="materialIcons" style={[styles.icon]} name='chat-bubble-outline'/>
                    <Icon type="materialIcons" style={[styles.icon]} name='done'/>
                    <Icon type="materialIcons" style={[styles.icon]} name='format-list-bulleted'/>
                    <Icon type="materialIcons" style={[styles.icon]} name='group'/>
                    <Icon type="materialIcons" style={[styles.icon]} name='local-phone'/>
                </View>
            </View>
        </View>
    )
}
module.exports = view
