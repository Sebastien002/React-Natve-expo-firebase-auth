import React, {Component} from "react";
import {connect} from "react-redux";
import ComponentView from "./view";
import preProcess from "../preprocess";
import * as FacebookAds from 'expo-ads-facebook';

class Main extends Component {
    /**
     * Constructor
     * @param props
     */
    constructor(props) {
        super(props);
        FacebookAds.AdSettings.addTestDevice(FacebookAds.AdSettings.currentDeviceHash);
    }

    /**
     * On Admob event
     */
    adMobEvent() {
        console.log("Admob event fired")
    }

    /**
     * On error
     */
    bannerError() {
        console.log("Banner Error")
    }

    /**
     * Show a interstitial Ad
     * @param ad
     */
    showInterstitialAd() {

        FacebookAds.InterstitialAdManager.showAd("513432372363654_568836403489917")
            .then(didClick => {
                console.log("Click in showInterstitialAd",didClick);
            })
            .catch(error => {
                console.log("Error in showInterstitialAd",error);
            })
    }

    /**
     * Show a rewarded Ad
     * @param ad
     */
    showRewardedAd(ad) {
        FacebookAds.InterstitialAdManager.showAd("513432372363654_568836403489917")
            .then(didClick => {
            })
            .catch(error => {
                console.log("Error in showRewardedAd",error);
            })
    }

    /**
     * Render method
     * @returns {*}
     */
    render() {
        return (ComponentView.bind(this))();
    }
}

/**
 * Bind Redux Actions
 * @param dispatch
 * @returns {{Object}}
 */
const bindAction = (dispatch) => {
    return {}
};
/**
 * Bind State to props
 * @param dispatch
 * @returns {{Object}}
 */
const mapStateToProps = (state) => {
    const {auth} = state;
    return {
        auth
    };
};
Main.displayName = "Abmob";
export default preProcess(Main, {
    connect: [mapStateToProps, bindAction],
    localize: true
});