import React, { Platform } from 'react-native'
import {Colors} from "arivaa-basic/styles";

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
    analytics: {
        marginTop: 20
    },
    item: {
        padding: 10,
        marginBottom: 5,
        backgroundColor: '#f7f7f7'
    },
    text: {
        color: Colors.primaryColor,
        fontSize: 14
    },
    label: {
        fontWeight: 'bold',
        color: Colors.primaryColor,
        marginBottom: 8
    },
    info: {
        color: '#555'
    },
    back: {
        paddingLeft: 10
    }
})

export default styles
