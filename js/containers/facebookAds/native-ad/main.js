import React, {Component} from "react";
import ComponentView from "./view";
import * as FacebookAds from 'expo-ads-facebook';

/**
 * @description Sample Component
 * @type Component
 * @author Inderdeep
 */
class Main extends Component {

    /**
     * Container
     * @param props
     */
    constructor(props) {
        super(props);

    }

    /**
     * ComponentDidMount Hook
     */
    componentDidMount() {

    }

    /**
     * Render Method
     * @returns {*}
     */
    render() {
        return (ComponentView.bind(this))();
    }
}
export default FacebookAds.withNativeAd(Main)
Main.displayName = "Sample-Component";
