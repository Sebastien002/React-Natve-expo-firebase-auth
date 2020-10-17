import React from 'react-native'
import { Colors } from 'arivaa-basic/styles'

var styles = React.StyleSheet.create({
    heading: {
        padding: 12,
        paddingBottom: 9,
        backgroundColor: '#f5f5f9'
    },
    name: {
        fontSize: 14,
        color: Colors.brandGrey,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    title: {
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
        color: Colors.brandGrey
    },
    modalContent: {
        padding: 10
    },
    button: {
        marginTop: 10
    }
})

export default styles
