import React from 'react-native'
import { Colors } from 'arivaa-basic/styles'

var styles = React.StyleSheet.create({
    container: {},
    description: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        lineHeight: 22,
        color: Colors.brandGrey
    },
    title: {
        fontWeight: 'bold',
        marginBottom: 15,
        color: Colors.primaryColor,
        paddingHorizontal: 10
    },
    section: {
        marginBottom: 20,
        height:200
    },
    content: {
        padding: 10,
        height:200
    }
})

export default styles
