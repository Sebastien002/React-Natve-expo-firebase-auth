import React, {Component} from "react";
import ComponentView from "./view";
import {getPropsForCustomActionSheet,getPropsForCustomShareActionSheet} from '../main';
import Actionsheet from '../main'
/**
 * @description ActionSheet Component
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
        this.state = {
            visible : false,
            props : null
        }
    }

    /**
     * ComponentDidMount Hook
     */
    componentDidMount() {

    }
    /**
     * showActionSheetWithOptions
     * @param config
     */
    showActionSheetWithOptions(config){

        if(config && config.native){
            Actionsheet.showActionSheetWithOptions(config);
        } else {
            this.setState({
                visible : true,
                props : getPropsForCustomActionSheet({
                    ...config,
                    onHide : this.hide.bind(this)
                })
            },()=>{
                this.actionsheet.show();
            })
        }
    }
    /**
     * showShareActionSheetWithOptions
     * @param config
     */
    showShareActionSheetWithOptions(config){

        if(config && config.native){
            Actionsheet.showShareActionSheetWithOptions(config);
        } else {

            this.setState({
                visible : true,
                props : getPropsForCustomShareActionSheet({
                    ...config,
                    onHide : this.hide.bind(this),
                    onCancel : this.hide.bind(this)
                })
            },()=>{
                this.actionsheet.show();
            })
        }
    }

    /**
     * Hide
     */
    hide(){
        if(this.actionsheet){
            this.actionsheet.hide();
            this.setState({
                visible : false,
                props : null
            })
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

Main.displayName = 'ActionSheet-Component'
