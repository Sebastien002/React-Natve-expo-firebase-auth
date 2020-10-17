import React from "react";
import styles from "./styles";
import {Text, View} from "react-native";
import Accordion from "../../accordion";
import {getRandom} from "../../util";
import Toast from "../../toast";
var view = function () {
    let data = [];
    for (let i = 0; i < 5; i++) {
        let company = getRandom("company")
        data.push({
            title: company.title,
            content: company.description
        })
    };
    return (
        <View style={[styles.container]}>
            <Text style={[styles.description]}>
                Accordions are useful when you want to arrange your content by menus and only
                want to show one type of content at a time.
            </Text>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Simple Accordion Demo</Text>
                <Accordion data={data}/>
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Accordion with Callbacks</Text>
                <Accordion data={data} onShow={(key, obj) => {
                    Toast.info(obj.title + " was shown")
                }} onHide={(key, obj) => {
                    Toast.info(obj.title + " was hidden")
                }}/>
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Accordion with Custom Styles</Text>
                <Accordion data={data} styles = {{
                    headerText : styles.customTitle,
                    contentText : styles.customContent
                }}/>
            </View>
        </View>
    )
};
module.exports = view;
