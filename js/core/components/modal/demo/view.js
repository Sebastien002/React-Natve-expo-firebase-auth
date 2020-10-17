import React from 'react'
import styles from './styles'
import { View, Text, TouchableHighlight } from 'react-native'
import Modal from '../modal-component'
import ModalTrigger from '../modal-trigger'
import ImageCard from '../../card/image-card'
import Button from '../../button'
import { getRandom } from '../../util'
import Thumbnail from '../../thumbnail'
import Link from '../../link'
import { Colors } from '../../../styles';


/**
 * View
 * @returns {XML}
 */
var view = function () {
    const modalContent =
        <ImageCard
            image={getRandom('image')}
            overlay={true}
            overlayTitle={getRandom('quote')}
            overlaySubTitle={getRandom('quote')}/>
    return (
        <View style={[styles.container]}>
            <Text style={[styles.description, {paddingBottom: 5}]}>
                A Modal is useful to open a view on top of the current view to ask or show
                some information.
            </Text>
            <Text style={[styles.description, {paddingTop: 0, fontWeight: 'bold'}]}>
                Our Modal can be opened in 2 ways.
                Via Modal Trigger where you don't need to manage opening and closing of the modal or
                you can create a managed modal where you control the opening and closing of the modal.
            </Text>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Default Modal Trigger</Text>
                <ModalTrigger
                    content={modalContent}
                    modalProps={{
                        styles: {
                            modalContent: {
                                padding: 10
                            }
                        }
                    }}
                />
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Custom Modal Trigger</Text>
                <ModalTrigger
                    content={modalContent}
                    modalProps={{
                        styles: {
                            modalContent: {
                                padding: 10
                            }
                        }
                    }}
                >
                    <Link>
                        <Thumbnail
                            icon="layers"
                            iconStyle={{
                                color: Colors.primaryColor
                            }}
                        />
                    </Link>
                </ModalTrigger>
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Modal via screen id</Text>
                <ModalTrigger
                    modalId="login"
                    triggerProps={{
                        text: 'Login'
                    }}
                />
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Managed Modal (State needs to be managed manually)</Text>
                <Button
                    type="bordered"
                    size="large"
                    text={'Managed Modal'}
                    onPress={() => {this.setState({visible: true})}}
                    style={[styles.button]}/>
            </View>
            <Modal visible={this.state.visible} onHide={() => {this.setState({visible: false})}}>
                <View style={{padding: 10}}>
                    {modalContent}
                </View>
            </Modal>

        </View>

    )
}
module.exports = view
