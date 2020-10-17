import React from 'react'
import styles from './styles'
import {View, Text} from 'react-native'
import Thumbnail from '../main'
/**
 * View
 * @returns {XML}
 */
var view = function () {
    return (
        <View style={[styles.container]}>
            <Text style={[styles.description]}>
                A thumbnail is a small image that represents a larger image for example profile images. If no image
                source is pass to thumbnail component it will show an empty thumbnail view. We provide thumbnails
                based on icon, text or an image
            </Text>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Square Thumbnails with Icon and Image</Text>
                <View style={[styles.thumbnails]}>
                    <Thumbnail
                        borderRadius={5}
                        icon={'image'}
                        style={[styles.thumbnail]}/>
                    <Thumbnail
                        borderRadius={5}
                        icon={'image'}
                        source={'https://placeimg.com/640/480/any'}
                        style={[styles.thumbnail]}/>
                    <Thumbnail
                        borderRadius={5}
                        text = {'IS'}
                        style={[styles.thumbnail]}/>
                </View>
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Rounded Thumbnails</Text>
                <View style={[styles.thumbnails]}>

                    <Thumbnail
                        borderRadius={40}
                        icon={'image'}
                        style={[styles.thumbnail]}/>
                    <Thumbnail
                        borderRadius={40}
                        icon={'image'}
                        source={'https://placeimg.com/640/480/any'}
                        style={[styles.thumbnail]}/>
                    <Thumbnail
                        borderRadius={40}
                        text = {'IS'}
                        style={[styles.thumbnail]}/>
                </View>
            </View>
        </View>
    )
}
module.exports = view
