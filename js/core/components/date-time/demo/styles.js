import React from 'react-native'
import {Colors} from 'arivaa-basic/styles'

var styles = React.StyleSheet.create({
    container: {
        padding: 10,
    },
    description: {
        paddingVertical: 20,
        lineHeight: 22,
        color: Colors.brandGrey
    },
    title: {
        fontWeight: 'bold',
        marginBottom: 20,
        color: Colors.primaryColor
    },
    section: {
        marginBottom: 20
    },
    button: {
        backgroundColor: 'red'
    },
    margin: {
        marginBottom: 5
    },
    message: {
        fontSize: 13,
        marginBottom: 20,
        color: Colors.primaryGreyColor
    }

})

export default styles
