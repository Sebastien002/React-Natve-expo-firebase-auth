import React from "react";
import {Platform, ScrollView, TouchableHighlight, View} from "react-native";
import ModalBox from "react-native-modalbox";
import Icon from "../../icon";
import styles from "./styles";
import ModalUtils from "../modal-utils";
import {NavigationEvents} from 'react-navigation'
/**
 * View
 * @returns {XML}
 */
var view = function () {
    const {children,secondaryContent,closeModalOnNavigate, contentOffsetTop,backdropOpacity,navigation,backdropPressToClose,backdrop, contentOffsetBottom, style, onHide, onShow, hideCloseButton, modalId, contentProps, coverScreen,useScrollView} = this.props
    const {visible, scrollEnabled} = this.state;
    let propStyles = this.props.styles || {};
    let {scrollViewProps} = this.props;
    scrollViewProps = scrollViewProps || {};
    let content;
    if (modalId) {
        /**
         * contentProps -> When modal Id is passed
         * @type {*}
         */
        let ModalScene = ModalUtils.getModalScene(modalId)
        content = ModalScene ? <ModalScene {...contentProps} hideModal = {this.hideModal.bind(this)} navigation = {navigation}/> : null
    } else {
        content = children
    }
    /**
     * We have 2 cases -
     * Without modal Id - Here we offset the screen by a certain padding so that close button is not on
     * content
     * With Modal Id - Here we offset the screen by a certain padding so that close button is not on
     * content
     * We also allow user to define his own offset
     * In Order to disable it pass it false
     *
     */
    let modalContentStyles = {};
    if (contentOffsetTop || !modalId) {
        modalContentStyles.paddingTop = (typeof contentOffsetTop == "number") ? contentOffsetTop : (Platform.OS === 'ios' ? 70 : 50);
    }
    if (contentOffsetBottom || !modalId) {
        modalContentStyles.paddingBottom = (typeof contentOffsetBottom == "number") ? contentOffsetBottom : 50;
    }
    return (

        <ModalBox
            isOpen={visible}
            onOpened={onShow}
            onClosed={onHide}
            coverScreen={typeof coverScreen != 'undefined' ? coverScreen : true}
            backButtonClose={true}
            //Put the visible check to disable flash of backdrop
            backdrop={visible?(backdrop || false):false}
            swipeToClose={false}
            onBackButtonPress={this.hideModal.bind(this)}
            backdropPressToClose={backdropPressToClose || false}
            style={[style, propStyles.modal]}
            backdropOpacity = {backdropOpacity||0.8}
        >
            {
                !hideCloseButton ? (
                    <TouchableHighlight underlayColor='transparent' onPress={this.hideModal.bind(this)}
                                        style={[styles.close, propStyles.close]}>
                        <Icon type="feather" name="x" style={[styles.closeIcon, propStyles.closeIcon]}/>
                    </TouchableHighlight>
                ) : null
            }
            {
                (useScrollView==false)?(
                        <View style={[styles.modalContent,modalContentStyles, propStyles.modalContent]}>
                            {content}
                        </View>
                ):(
                    <ScrollView
                        scrollEnabled = {scrollEnabled}
                        {...scrollViewProps}
                        style={[styles.flexOne,scrollViewProps?scrollViewProps.style:null, propStyles.scrollView]}
                    >
                        <View style={[styles.modalContent,modalContentStyles, propStyles.modalContent,!visible?{
                            opacity:0
                        }:null]}>
                            {
                                content
                            }
                        </View>
                    </ScrollView>
                )
            }
            {
                closeModalOnNavigate==false?null:(
                    <NavigationEvents
                        onWillBlur={payload => this.hideModal()}
                        onDidBlur={payload => this.hideModal()}
                    />
                )
            }
            {secondaryContent}
        </ModalBox>

    )
}
module.exports = view
