import React from 'react-native'
import { Colors } from 'arivaa-basic/styles'

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
        marginBottom: 15,
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
    margin: {
        marginBottom: 5
    }
})

export default styles
