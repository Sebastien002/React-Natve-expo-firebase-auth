import React, {Component} from "react";
import ComponentView from "./view";
import {withNavigation} from "react-navigation";
/**
 * @description Go Back
 * @type Component
 * @author Inderdeep
 */
class Main extends Component {

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
     * Go Back
     */
    goBack() {
        const {navigation, onPress} = this.props;
        navigation.goBack();
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
export default withNavigation(Main)
Main.displayName = 'Link-Back'
