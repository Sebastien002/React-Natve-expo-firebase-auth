import React, {Component} from "react";
import ComponentView from "./view";
import {Linking} from "react-native";
/**
 * @description Go Back
 * @type Component
 * @author Inderdeep
 */
export default class Main extends Component {

    /**
     * Container
     * @param props
     */
    constructor(props) {
        super(props)

    }

    /**
     * ComponentDidMount Hook
     */
    componentDidMount() {

    }

    /**
     * onPress
     */
    onPress() {
        const {link, onPress} = this.props;
        goToExternalLink(link);
        if (onPress && onPress instanceof Function) {
            onPress();
        }
    }

    /**
     * Render Method
     * @returns {*}
     */
    render() {
        return (ComponentView.bind(this))()
    }
}
export function goToExternalLink(link){
    console.log(link)
    Linking.canOpenURL(link).then(supported => {
        if (supported) {
            Linking.openURL(link);
        } else {
            console.warn("Don't know how to open URI: " + link);
        }
    });
}
Main.displayName = 'External-Link'
