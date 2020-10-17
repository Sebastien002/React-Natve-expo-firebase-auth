import React from 'react'
import {View} from 'react-native'
import Modal from '../modal-component'
import ArivaaButton from '../../button'
/**
 * View
 * @returns {XML}
 */
var view = function () {
    const {children, content,modalId,triggerProps} = this.props
    const {visible} = this.state;
    /**
     * Modal Props are the actual Modal Properties supported by modal component
     */
    let {style, modalProps} = this.props
    style = style || {}
    modalProps = modalProps || {};
    let modifiedChildren = null;
    /**
     * This modal implementation will work for a single child based mode
     * and the child should support the onPress or onClick event
     */
    if (children) {
        modifiedChildren = React.cloneElement(children, {
            onPress: (event) => {
                this.onPress(children.props.onPress || children.props.onClick)
            },
            onClick: (event) => {
                this.onPress(children.props.onPress || children.props.onClick)
            }
        });
    } else {
        modifiedChildren = (
            <ArivaaButton
                text="Click here to open modal"
                type="bordered"
                size="large"
                {...triggerProps}
                onPress={this.onPress.bind(this)} >
            </ArivaaButton>
        )
    }

    return (
        <View style={[style.container, this.props.style]}>
            {modifiedChildren}
            <Modal
                ref = {(ref)=>{this.modalRef = ref}}
                visible={visible}
                modalId = {modalId}
                {...modalProps}
                onHide={this.hideModal.bind(this)}
                style={[style.modal, modalProps.style,!visible?{opacity:0}:null]}
            >
                {content}
            </Modal>
        </View>
    )
}
module.exports = view
