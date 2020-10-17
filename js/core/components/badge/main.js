import React, {Component} from "react";
import ComponentView from "./view";

/**
 * @description Badge Component
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
     * Get type of select
     */
    getType() {
        let {type} = this.props;
        type = (type || "").toLowerCase();
        return type
    }
    /**
     * Render Method
     * @returns {*}
     */
    render() {
        return (ComponentView.bind(this))()
    }
}

Main.displayName = 'Badge-Component';
