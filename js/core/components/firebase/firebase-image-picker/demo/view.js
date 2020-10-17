import React from 'react'
import styles from './styles'
import { View, Text, Alert } from 'react-native'

import FirebaseImagePicker from '../main';
import ExternalLink from '../../../link/external-link';

var view = function () {
    const {uri} = this.state
    return (
        <View style={styles.container}>
            <Text style={[styles.description]}>
                Firebase Image Picker component can be used to upload the image directly to firebase.
            </Text>
            <View style={styles.section}>
                <Text style={styles.title}>Default Image Picker</Text>
                <Text style={styles.message}>All the image picker features are
                also available in this component</Text>
                <FirebaseImagePicker
                    imageWidth={100}
                    imageHeight={100}
                    imageStyle={[styles.imageStyle]}
                    onChange = {({uri})=>{this.setState({uri})}}
                />
                {
                   uri?(
                       <ExternalLink link={uri}>
                           <Text style={[styles.section]}>
                               Check Uploaded Image
                           </Text>
                       </ExternalLink>
                   ):null
                }
            </View>

        </View>
    )
}
module.exports = view
