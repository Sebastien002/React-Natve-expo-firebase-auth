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
        marginBottom: 20,
        color: Colors.primaryColor
    },
    section: {
        marginBottom: 20
    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    loader: {
        marginRight: 10,
        backgroundColor: '#f7f7f7',
        padding: 10,
        borderRadius: 4
    }
})

export default styles
