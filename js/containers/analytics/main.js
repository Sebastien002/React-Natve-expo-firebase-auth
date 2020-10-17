import React, {Component} from "react";
import {connect} from "react-redux";
import ComponentView from "./view";
import preProcess from "../preprocess";

class Main extends Component {

    constructor(props) {
        super(props);
    }


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
    return {}
};
/**
 * Bind State to props
 * @param dispatch
 * @returns {{Object}}
 */
const mapStateToProps = (state) => {
    const {auth} = state;
    return {
        auth
    };
};
Main.displayName = "Analytics";
export default preProcess(Main, {
    connect: [mapStateToProps, bindAction],
    localize: true
});