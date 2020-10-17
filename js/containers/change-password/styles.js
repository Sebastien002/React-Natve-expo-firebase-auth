import React, { Platform } from 'react-native'
import { Colors } from 'arivaa-basic/styles'

var styles = React.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'ios' ? 40 : 25,
    },
    content: {
        paddingBottom: 100
    },
    header: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        fontSize: 14,
        color: '#757575',
        backgroundColor: '#f2f2f7'
    },
    elementView: {
        paddingTop: 10
    },
    element: {
        padding: 10
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
    scrollBox: {
        flex: 1,
    },
    button: {
        marginBottom: 10,
        backgroundColor: Colors.primaryColor,
        borderColor: Colors.primaryColor
    },
    buttonText: {
        color: '#fff',
        fontSize: 14
    },
    form: {
        backgroundColor: '#fff'
    },
    fieldLabel: {
        color: Colors.primaryColor,
        marginBottom: 10
    },
    input: {
        marginBottom: 25,
        borderWidth: 0,
        borderBottomWidth: 1,
        padding: 0,
        paddingLeft: 0,
        height: 35,
        margin: 0
    },
    inputIcon: {
        color: Colors.brandGrey
    },
    text: {
        color: Colors.primaryColor
    },
    back: {
        paddingLeft: 10
    },
    label: {
        color: Colors.primaryColor,
        fontSize: 18,
        marginBottom: 4
    },
    noCurrentPassword: {
        marginBottom: 20,
        color: '#9c9c9c'
    }
})

export default styles
