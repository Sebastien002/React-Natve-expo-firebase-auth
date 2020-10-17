import React, { Component } from 'react';
import ComponentView  from './view';
import {parseQueryString} from '../../utils/common';
import {Toast} from 'arivaa-basic';
import Spinner from '../spinner'
/**
 * @description CustomWebView
 * This component is used to render the web views
 * for general purpose firebase mechanisms like
 * twitter authentication,github authentication,
 * Recaptcha
 * @type Component
 * @author Inderdeep
 */
export default class Main extends Component {

    /**
     * Container
     * @param props
     */
    constructor(props){
        super(props);
        this.state = {
            visible : false,
            viewLoaded : false
        }
    }
    /**
     * ComponentDidMount Hook
     */
    componentDidMount(){

    }
    componentWillReceiveProps(nextProps){
        if(this.state.visible!=nextProps.visible){
            this.setState({
                visible : nextProps.visible
            })
        }
    }
    /**
     * On Navigation State change in Re-captcha Web-View
     * @param event
     */
    onNavigationStateChange(event){
        const {url} = event;
        const {onSuccess,onFailMessage,reloadOnFail} = this.props;
        let hash = url.substring(url.indexOf('#') + 1);
        hash = parseQueryString(hash);
        /**
         * This is for the scenario when it runs the first time
         */
        if(typeof hash.response == "undefined"){
            return;
        }
        if(onSuccess && hash.response!=""){
            onSuccess(hash.response);
        } else {
            this.setState({
                visible : false
            });
            Toast.fail(onFailMessage|| "Please try again",0.5);
            /**
             * Invalid Captcha or captcha has expired
             */
            if(reloadOnFail){
                this.webViewRef.reload();
            }
        }
    }

    /**
     * On Error in Webview
     * @param err
     */
    onError(err){
        console.log(err);
        Toast.fail(onFailMessage|| "Please try again",0.5);
        this.setState({
            visible : false
        })
        const {onError} = this.props;
        if(onError){
            onError(err);
        }
    }

    onLoadStart(){
        Spinner.start();
    }
    onLoadFinish(){
        this.setState({
            viewLoaded:true
        })
        Spinner.stop();
    }
    onHide(){
        const {onHide} = this.props;
        if(onHide instanceof Function){
            onHide();
        }
        Spinner.stop();
    }
    /**
     * Render Method
     * @returns {*}
     */
    render() {
        return (ComponentView.bind(this))();
    }
}

Main.displayName = "Recaptcha";
