import React, {Component} from "react";
import ComponentView from "./view";

/**
 * @description Custom Card Component
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
     * Check if passed object is a string
     * @param obj
     * @returns {boolean}
     */
    isString(obj) {
        return typeof obj == "string" || typeof obj=="number";
    }

    /**
     * Render Method
     * @returns {*}
     */
    render() {
        return (ComponentView.bind(this))()
    }
}

Main.displayName = 'Custom-Card-Component';
