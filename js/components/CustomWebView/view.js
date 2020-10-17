import React from 'react';
import styles from './styles';
import {View,Text,WebView} from 'react-native';
import {Modal} from 'arivaa-basic';
import {Colors} from 'arivaa-basic/styles'
import WebJavascript from './web-javascript';
import {Environment} from '../../config';
import Constants from 'expo-constants';
import Spinner from '../spinner'
const isStandaloneApp = Constants.appOwnership==="standalone";
var view = function(){
	const {url,style,scriptId} = this.props;
	const {visible,viewLoaded} = this.state;
    /**
	 * When the app is installed as a standalone app
	 * the require file will not work with firebase as
	 * firebase only supports the html file opened from
	 * a web url and not something like about://
     */
	let source = {uri:Environment.WEBVIEW_URL};//isStandaloneApp?{uri:Environment.WEBVIEW_URL}: require("./index.html")
	return (
		<Modal style = {{backgroundColor:Colors.primaryColor}} visible={visible} onHide = {this.onHide.bind(this)} contentOffsetTop={0} contentOffsetBottom={0}>
			{
                visible?(
					<WebView
						onLoadStart = {this.onLoadStart.bind(this)}
						onLoad = {this.onLoadFinish.bind(this)}
						javaScriptEnabled={true}
						domStorageEnabled={true}
						javaScriptEnabledAndroid = {true}
						injectedJavaScript = {WebJavascript[scriptId]}
						ref = {(ref)=>{this.webViewRef = ref;}}
						style={[
                            {backgroundColor:Colors.primaryColor,...style},
							viewLoaded?{flex:1}:{flex:0}
						]}
						source={source}
						onNavigationStateChange={this.onNavigationStateChange.bind(this)}
						onError={this.onError.bind(this)}
						onLoadingError = {this.onError.bind(this)}
					/>
				):null
			}
		</Modal>
	)
}
module.exports = view;
