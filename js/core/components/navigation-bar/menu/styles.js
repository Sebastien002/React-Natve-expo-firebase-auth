import React, { Platform } from 'react-native'
import { Colors } from 'arivaa-basic/styles'

var styles = React.StyleSheet.create({
    header: {
        height: (Platform.OS === 'ios') ? 60 : 50,
        backgroundColor: '#e6e6e6',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerLeft: {
        position: 'absolute',
        left: 10,
        zIndex: 1,
        flexDirection: 'row'
    },
    headerTitle: {
        color: Colors.brandGrey,
        textAlign: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    headerRight: {
        position: 'absolute',
        right: 10,
        flexDirection: 'row',
    },
    leftLink: {
        marginRight: 2,
        padding: 8
    },
    rightLink: {
        marginLeft: 2,
        padding: 8
    },
    content: {
        color: Colors.primaryColor,
        marginTop: 2
    },
    menuIcon: {
        fontSize: 22
    }
})

export default styles
