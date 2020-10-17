import React, {Component} from "react";
import ComponentView from "./view";

/**
 * @description List Card Component
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
     * On Item Click
     * @param item
     * @param index
     */
    onItemClick(item,index){
        const {onItemClick} = this.props;
        if(onItemClick instanceof Function){
            onItemClick(item,index);
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

Main.displayName = 'List-Card-Component';
