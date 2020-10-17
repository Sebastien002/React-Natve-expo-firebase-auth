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
    message: {
        fontSize: 13,
        marginBottom: 20,
        color: Colors.primaryGreyColor
    },
    title: {
        fontWeight: 'bold',
        marginBottom: 20,
        color: Colors.primaryColor
    },
    section: {
        marginBottom: 20
    },
    adMob: {
        marginTop: 10
    },
    banner: {
        marginBottom: 20,
        marginLeft: -10
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
    back: {
        paddingLeft: 10
    }
})

export default styles
