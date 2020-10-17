import React, {Component} from "react";
import ComponentView from "./view";
import {withNavigation} from 'react-navigation'
/**
 * @description Navigation-Bar-List Component
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
      // console.log(props.navigation)
    }

    /**
     * ComponentDidMount Hook
     */
    componentDidMount() {

    }

    /**
     * Is Route Active
     * @param link
     * @returns {boolean}
     */
    isActive(link){
        const {routeName} = this.props.navigation.state;
        return routeName == link;
    }

    /**
     * On Item click
     * @param item
     * @param index
     */
    onItemClick(item,index){
        if (item.action instanceof Function) {
            item.action(item,index)
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
Main.displayName = 'Navigation-Bar-List-Component'
