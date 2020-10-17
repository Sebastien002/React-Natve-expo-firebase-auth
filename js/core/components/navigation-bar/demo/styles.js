import React from 'react-native'
import {Colors} from 'arivaa-basic/styles'

var styles = React.StyleSheet.create({
    container: {},
    description: {
        paddingHorizontal: 10,
        paddingVertical: 20,
        lineHeight: 22,
        color: Colors.brandGrey
    },
    title: {
        fontWeight: 'bold',
        paddingHorizontal: 10,
        marginBottom: 20,
        color: Colors.primaryColor
    },
    section: {
        marginBottom: 20
    },
    message: {
        fontSize: 13,
        marginBottom: 20,
        color: Colors.primaryGreyColor,
        paddingHorizontal: 10,
    },
    margin:{
        marginBottom: 5,
    },
    header: {
        backgroundColor: Colors.primaryColor
    },
    white: {
        color: '#fff'
    }
})

export default styles
