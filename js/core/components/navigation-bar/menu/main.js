import React, {Component} from "react";
import ComponentView from "./view";
import {withNavigation} from 'react-navigation'
/**
 * @description Navigation-Bar-Menu Component
 * @type Component
 * @author Inderdeep
 */
class Main extends Component {

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
     * On Item click
     * @param item
     * @param index
     * @param side
     */
    onItemClick(item,index,side){
        if (item.action instanceof Function) {
            item.action(item,index,side)
        }
    }
    /**
     * Render Method
     * @returns {*}
     */
    render() {
        return (ComponentView.bind(this))()
    }
}
export default withNavigation(Main)
Main.displayName = 'Navigation-Bar-Menu-Component'
