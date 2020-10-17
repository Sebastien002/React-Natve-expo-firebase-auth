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
        super(props)
    }

    /**
     * ComponentDidMount Hook
     */
    componentDidMount() {

    }

    /**
     * On Footer Item Click
     * @param item
     * @param index
     */
    onFooterItemClick(item,index){
        const {onFooterItemClick} = this.props;
        if(onFooterItemClick instanceof Function){
            onFooterItemClick(item,index);
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

Main.displayName = 'Image-Card-Component';
