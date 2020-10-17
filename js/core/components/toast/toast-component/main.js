import React, {Component} from "react";
import ComponentView from "./view";

/**
 * @description Toast Component
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
            visible : false,
            type : null,
            closeFn : null,
            mask : true
        }

    }

    /**
     * ComponentDidMount Hook
     */
    componentDidMount() {

    }

    /**
     * Show Toast
     * @param time
     */
    showToast(content,type,duration,closeFn,mask){
        this.setState({
            content,
            visible : true,
            type,
            closeFn,
            duration : duration || 500,
            mask
        },()=>{
            setTimeout(this.hide.bind(this),this.state.duration)
        })
    }

    /**
     * Hide Toast
     */
    hide(){
        this.setState({
            visible : false,
            type : null,
            closeFn : null,
            mask : true,
            content : null,
            duration : null
        })
    }
    /**
     * show
     * @param time
     * @param closeFn
     */
    show(message,time,closeFn,mask){
        this.showToast(message,"show",time,closeFn,mask);
    }
    /**
     * Success
     * @param time
     * @param closeFn
     */
    success(message,time,closeFn,mask){
        this.showToast(message,"success",time,closeFn,mask);
    }
    /**
     * Fail
     * @param time
     * @param closeFn
     */
    fail(message,time,closeFn,mask){
        this.showToast(message,"fail",time,closeFn,mask);
    }
    /**
     * Loading
     * @param time
     * @param closeFn
     */
    loading(message,time,closeFn,mask){
        this.showToast((typeof message == "undefined")?"loading":message.toString(),"loading",time || (60 * 1000),closeFn,mask);
    }
    /**
     * Info
     * @param time
     * @param closeFn
     */
    info(message,time,closeFn,mask){
        this.showToast(message,"info",time,closeFn,mask);
    }
    /**
     * offline
     * @param time
     * @param closeFn
     */
    offline(message,time,closeFn,mask){
        this.showToast(message,"offline",time,closeFn,mask);
    }
    /**
     * Render Method
     * @returns {*}
     */
    render() {
        return (ComponentView.bind(this))()
    }
}

Main.displayName = 'Toast-Component'
