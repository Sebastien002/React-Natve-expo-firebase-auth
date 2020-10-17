import React, {Component} from "react";
import ComponentView from "./view";

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
            index:0,
            routes: [
                { key: 'first', title: 'First' },
                { key: 'second', title: 'Second' },
            ],
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

Main.displayName = 'Tabs-Component-Demo'
