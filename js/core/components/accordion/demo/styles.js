import React from 'react-native'
import { Colors } from 'arivaa-basic/styles';

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
        marginBottom: 15,
        color: Colors.primaryColor
    },
    section: {
        marginBottom: 20
    },
    customTitle: {
        color: Colors.primaryColor,
        fontSize: 14
    },
    customContent: {
        color: Colors.brandGrey,
        lineHeight: 24,
        backgroundColor: '#f7f7f7',
        padding: 10
    }
})

export default styles
