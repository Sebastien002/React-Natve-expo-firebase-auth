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
        this.state = {
        }

    }
    /**
     * ComponentDidMount Hook
     */
    componentDidMount() {

    }

    /**
     * Go to specific component demo
     * @param component
     */
    goToComponent(component) {
        const {navigation} = this.props;
        navigation.navigate("elementView", component);
    }

    /**
     * Render Method
     * @returns {*}
     */
    render() {
        return (ComponentView.bind(this))();
    }
}

Main.displayName = "UI-Elements";
