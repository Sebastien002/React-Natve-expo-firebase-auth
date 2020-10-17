import React, {Component} from 'react'
import ComponentView from './view'
import {Alert} from 'react-native';
import Toast from '../../toast';


/**
 * @description Actionsheet Demo Component
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
        this.action = this.action.bind(this)
    }

    action() {
        Toast.success("Action -  Success");
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

Main.displayName = 'Action-Sheet-Component-Demo'
