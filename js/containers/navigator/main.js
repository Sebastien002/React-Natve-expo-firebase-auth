import React, { Component } from 'react';
import ComponentView  from './view';
import {ActionNames, createAction} from 'app-redux/actions';
import preProcess from '../preprocess';
/**
 * @description Navigator Component
 * @type Component
 * @author Inderdeep
 */
class Main extends Component {

    /**
     * Container
     * @param props
     */
    constructor(props){
        super(props);

    }

    /**
     * ComponentDidMount Hook
     */
    componentDidMount(){

    }

    /**
     * onNavigationStateChange Hook for navigator
     * @param previous
     * @param next
     * @param action
     */
    onNavigationStateChange(previous, next, action){
        const {navigation} = this.props;
        //navigation.closeDrawer();
    }

    /**
     * Render Method
     * @returns {*}
     */
    render() {
        return (ComponentView.bind(this))();
    }
}

Main.displayName = "Navigator";

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

    }

};

export default preProcess(Main, {
    connect: [null, bindAction],
    localize: true
});
