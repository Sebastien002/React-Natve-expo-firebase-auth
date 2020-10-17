import React, {Component} from "react";
import ComponentView from "./view";
import PropTypes from "prop-types";

/**
 * @description Sample Component
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
        this.state={
            index:0
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

Main.displayName = 'Tabs-Component'

Main.propTypes = {
    tabs: PropTypes.array.isRequired
}
