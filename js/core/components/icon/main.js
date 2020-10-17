import React, {Component} from "react";
import ComponentView from "./view";

/**
 * @description Icon Component
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
     * Set Native Props
     * @param nativeProps
     */
    setNativeProps(nativeProps) {
        this.iconRef ? this.iconRef.setNativeProps(nativeProps) : null;
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

Main.displayName = 'Icon-Component';
