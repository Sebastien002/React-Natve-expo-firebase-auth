import React from 'react-native'
import { Colors } from 'arivaa-basic/styles'

var styles = React.StyleSheet.create({
    thumbnail: {
        marginBottom: 10
    },
    empty: {
        fontSize: 13,
        marginBottom: 20,
        color: Colors.primaryGreyColor
    },
    button: {
        marginBottom: 10
    },
    removeBtn: {
        width: 30,
        height: 30,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderWidth: 0,
        position: 'absolute',
        top: -12,
        right: -12,
        paddingLeft: 0,
        paddingRight: 0,
        zIndex: 4,
    },
    trigger: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 2,
        borderWidth: 0,
        backgroundColor: 'transparent'
    },
    icon: {
        color: '#fff',
        fontSize: 20
    },
    image: {
        marginBottom: 10
    }
})

export default styles
