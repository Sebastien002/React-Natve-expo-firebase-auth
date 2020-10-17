import React from 'react'
import styles from './styles'
import { View, Text, Alert } from 'react-native'
import Button from '../../button'
import ImagePicker from '../main'
import Icon from '../../icon'
import Thumbnail from '../../thumbnail'
import ActionSheetComponent from '../../actionSheet/actionsheet-component'
import ModalTrigger from '../../modal/modal-trigger'

var view = function () {
    const {data} = this.state
    return (
        <View style={styles.container}>
            <Text style={[styles.description]}>
                An Image Picker component is useful in selecting images from the phone's library or taking a
                photo with the camera.
            </Text>
            <View style={styles.section}>
                <Text style={styles.title}>Default Image Picker</Text>
                <Text style={styles.message}>( In default Image Picker you don't need to control display of selected
                    image and opening of an image picker )</Text>
                <ImagePicker imageWidth={100} imageHeight={100} imageStyle={[styles.imageStyle]}/>
            </View>
            <View style={styles.section}>
                <Text style={styles.title}>Custom Image Picker</Text>
                <Text style={styles.message}>( You can control the triggering of image picker and display of image
                    selected )</Text>
                <View style={[styles.imageList]}>
                    {
                        data.map((item, index) => {
                            return <View key={index}>
                                <Thumbnail borderRadius={5} source={item.value.uri} style={styles.item}/>
                                <Button type="rounded"
                                        style={[styles.removeBtn]}
                                        onClick={() => {
                                            this.removeImage(index)
                                        }}
                                        text={<Icon type={'ionicons'} name={'md-remove'} style={[styles.removeIcon]}/>}
                                />
                            </View>
                        })
                    }
                    <View style={styles.item}>
                        <ImagePicker onChange={(value) => {
                            this.addImage({value})
                        }}>
                            <Thumbnail borderRadius={5} icon={'plus'}
                                       iconStyle={[styles.thumbnailIconStyle]}/>
                        </ImagePicker>
                    </View>
                </View>
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Usage inside image picker</Text>
                <ModalTrigger
                    modalProps={{
                        contentOffsetTop: 0
                    }}
                    content={(
                        <View style={{padding: 20, paddingTop: 70}}>
                            <ImagePicker getActionsheet={() => {
                                return this.actionsheet
                            }}/>
                            <ActionSheetComponent ref={(ref) => {this.actionsheet = ref}}/>
                        </View>
                    )}
                />
            </View>
        </View>
    )
}
module.exports = view
