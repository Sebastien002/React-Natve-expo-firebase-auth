import React, {Component} from "react";
import {connect} from "react-redux";
import ComponentView from "./view";
import preProcess from "../preprocess";
import {Admob} from "../../config";
import {
    AdMobInterstitial,
    AdMobRewarded
  } from 'expo-ads-admob';
class Main extends Component {
    /**
     * Constructor
     * @param props
     */
    constructor(props) {
        super(props);
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
    async showInterstitialAd(ad) {

        AdMobInterstitial.setAdUnitID(ad.unitId);
        AdMobInterstitial.setTestDeviceID(Admob.testDeviceID);
        await AdMobInterstitial.requestAdAsync();
        await AdMobInterstitial.showAdAsync();
    }

    /**
     * Show a rewarded Ad
     * @param ad
     */
    async showRewardedAd(ad) {
        AdMobRewarded.setAdUnitID(ad.unitId);
        AdMobRewarded.setTestDeviceID(Admob.testDeviceID);
        await AdMobRewarded.requestAdAsync();
        await AdMobRewarded.showAdAsync()
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