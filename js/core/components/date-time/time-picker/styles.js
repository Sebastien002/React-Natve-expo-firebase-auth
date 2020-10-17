import React, { Platform } from 'react-native'
import { Colors } from 'arivaa-basic/styles'

var styles = React.StyleSheet.create({
    view: {
        padding: 10
    },
    itemStyle: {
        fontSize: 14,
        color: '#fff'
    },
    modalContent: {
        backgroundColor: Colors.primaryColor,
        width: 200,
        height: Platform.OS === 'ios' ? 300 : 320,
        borderRadius: 10
    },
    androidStyle: {
        marginTop: Platform.OS === 'ios' ? 0 : 30,
    }
})

export default styles
