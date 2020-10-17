import React from 'react-native'
import {Colors} from 'arivaa-basic/styles'

var styles = React.StyleSheet.create({
    container: {
        padding: 10
    },
    description: {
        paddingVertical: 20,
        lineHeight: 22,
        color: Colors.brandGrey
    },
    title: {
        fontWeight: 'bold',
        marginBottom: 5,
        color: Colors.primaryColor
    },
    section: {
        marginBottom: 20
    },
    imageStyle: {
        width: 100,
        height: 100
    },
    message: {
        fontSize: 13,
        marginBottom: 20,
        color: Colors.primaryGreyColor
    },
    caption: {
        fontSize: 13,
        marginBottom: 20,
        color: Colors.primaryGreyColor
    },
    imageList: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    item: {
        marginRight: 8,
        marginBottom: 8
    },
    thumbnailIconStyle: {
        color: Colors.primaryColor
    },
    removeBtn: {
        width: 25,
        height: 25,
        backgroundColor: Colors.brandRed,
        borderWidth: 0,
        position: 'absolute',
        top: -14,
        right: 4,
        paddingLeft: 0,
        paddingRight: 0,
        zIndex: 4,
    },
    removeIcon: {
        color: '#fff'
    }
})

export default styles
