import React, {Component} from "react";
import ComponentView from "./view";
import preProcess from "../preprocess";
import {ActionNames, createAction} from "app-redux/actions";
/**
 * @description Home
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
     * Open Drawer
     */
    openDrawer() {
        const {navigation} = this.props;
        navigation.openDrawer();
    }

    /**
     * Render Method
     * @returns {*}
     */
    render() {
        return (ComponentView.bind(this))();
    }
}
/**
 * Bind Redux Actions
 * @param dispatch
 * @returns {{Object}}
 */
const bindAction = (dispatch) => {
    return {
    }
};
/**
 * Bind State to props
 * @param dispatch
 * @returns {{Object}}
 */
const mapStateToProps = (state) => {
    return {
        drawer: !!state.ui.drawer
    };
};
Main.displayName = "Home";
export default preProcess(Main, {
    connect: [mapStateToProps, bindAction],
    localize: true
});
