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
    demo: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 10,
        marginBottom: 10
    }
})

export default styles
