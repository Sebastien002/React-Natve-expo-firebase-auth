import React, {Component} from "react";
import ComponentView from "./view";

/**
 * @description Country Code Picker Demo Component
 * @type Component
 * @author Inderdeep
 */

export default class Main extends Component {

    /**
     * Container
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {

        }
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
        return (ComponentView.bind(this))()
    }
}

Main.displayName = 'Country-Code-Picker-Component'
