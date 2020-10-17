import React from "react";
import {View,Dimensions,Text,StatusBar} from "react-native";
import {Tabs} from "antd-mobile-rn";
import {Colors} from 'arivaa-basic/styles';
import {getModifiedProps} from '../util'
import { TabView, TabBar } from 'react-native-tab-view';
var view = function () {
    const {tabs,theme} = this.props;
    const {index}=this.state;
    const propStyles = this.props.styles || {};
    const {width}=Dimensions.get('window');
    return (
        <TabView
            style={{
                backgroundColor:'#fff'
            }}
            navigationState={{
                index,
                routes:tabs.map((tab,index)=>{
                    return {
                        key:index,
                        title:tab.title
                    }
                })
            }}
            renderTabBar={props =>
                <TabBar
                    {...props}
                    indicatorStyle={{ backgroundColor: theme || Colors.primaryColor }}
                    labelStyle={{ color: theme || Colors.primaryColor }}
                    style={{ backgroundColor:'#f2f2f7',elevation:0}}
                    {...getModifiedProps(this.props,['theme'])}
                />
            }
            renderScene={({route})=>{
                return (
                    <View style = {[propStyles.tabContainer]}>{tabs[route.key].content}</View>
                );
            }}
            onIndexChange={index => this.setState({ index })}
            initialLayout={{ width}}
        />
    );
}
module.exports = view
