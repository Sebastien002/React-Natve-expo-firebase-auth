import React from "react";
import {Text, View} from "react-native";
import * as FacebookAds from 'expo-ads-facebook';
const {AdMediaView,AdIconView,AdTriggerView}=FacebookAds;
var view = function () {
    console.log("Native add",this.props.nativeAd)
    return (
        <View>
            <AdMediaView />
            <AdIconView />
            <AdTriggerView>
                <Text>{this.props.nativeAd.bodyText}</Text>
            </AdTriggerView>
        </View>
    )
}
module.exports = view;
