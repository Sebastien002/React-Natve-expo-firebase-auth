import React from "react";
import styles from "./styles";
import {Text, View} from "react-native";
import CountryCodePicker from "../index";

var view = function () {
    return (
        <View style={[styles.container]}>
            <Text style={[styles.description]}>
                Country Code Picker (CCP) is a component which provides an easy way to search and select country phone
                code ( national code ) for the telephone number.
            </Text>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Select Country Code picker</Text>
                <CountryCodePicker
                    type="picker"
                />
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Select Country Code Modal</Text>
                <CountryCodePicker
                />
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Select Country Code With Custom Formatters</Text>
                <CountryCodePicker
                    type="picker"
                    labelFormatter = {(obj)=>{
                        return "You love "+obj.name+"?"
                    }}
                    valueFormatter = {(obj)=>{
                        return "You loved "+obj.name+"?"
                    }}
                    onChange={(value)=>{this.setState({value})}}
                />
                <Text style={[styles.custom]}>{this.state.value}</Text>
            </View>
        </View>
    )
}
module.exports = view
