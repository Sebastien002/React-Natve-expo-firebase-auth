import React from 'react-native'
import { Colors } from 'arivaa-basic/styles'

var styles = React.StyleSheet.create({
    input: {
        height: 40,
        backgroundColor: '#fff',
        padding: 10,
        paddingLeft: 15,
        borderColor: '#e6e6e6',
        borderBottomColor: '#e6e6e6',
        borderWidth: 1,
        borderRadius: 4,
        marginLeft: 0
    },
    inputIcon: {
        fontSize: 24,
        color: Colors.brandGrey,
        left: -5,
        top: -12,
        position: 'absolute'
    }
})

export default styles
