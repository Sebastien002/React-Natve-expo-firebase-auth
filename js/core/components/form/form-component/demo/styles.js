import React from 'react-native'
import { Colors } from 'arivaa-basic/styles'

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
        marginBottom: 15,
        color: Colors.primaryColor
    },
    section: {
        marginBottom: 20
    },
    list: {
        borderColor: '#e9e9e9',
        borderWidth: 1,
        padding: 10
    },
    input: {
        marginBottom: 10
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 10,
    },
    required: {
        fontWeight: 'bold',
        color: Colors.brandRed
    },
    field: {
        marginBottom: 10
    },
    button: {
        backgroundColor: Colors.primaryColor,
        borderColor: Colors.primaryColor,
        marginTop: 10
    },
    buttonText: {
        fontSize: 14,
        color: '#fff'
    },
    margin: {
        marginBottom: 10
    }
})

export default styles
