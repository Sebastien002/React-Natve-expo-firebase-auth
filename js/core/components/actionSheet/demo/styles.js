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
        marginBottom: 10,
        color: Colors.primaryColor
    },
    section: {
        marginBottom: 20
    },
    message: {
        fontSize: 13,
        marginBottom: 10,
        color: Colors.primaryGreyColor
    },
    trigger: {
        marginTop: 10
    },
    custom: {
        backgroundColor: '#f5f5f5',
        borderColor: '#e6e6e6',
        padding: 10,
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: {width: 5, height: 5,},
        shadowColor: '#c7c7c7',
        shadowOpacity: 1.0,
    },
    icon: {
        fontSize: 32,
        lineHeight: 40,
        color: Colors.primaryColor
    },
    customTriggerText: {
        color: '#fff',
        fontSize: 14
    },
    margin: {
        marginBottom: 5
    }
})

export default styles
