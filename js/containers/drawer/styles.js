import React from 'react-native'
import { Colors } from 'arivaa-basic/styles'
import { Dimensions, Platform, StatusBar } from 'react-native'
import { ifIphoneX } from 'react-native-iphone-x-helper'

let deviceHeight = Dimensions.get('window').height
var styles = React.StyleSheet.create({
    scrollView: {
        height: deviceHeight,
        backgroundColor: '#FFF',
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    drawerHeader: {
        backgroundColor: '#f7f7f7',
        flex: 1,
        flexDirection: 'row',
        ...ifIphoneX({
            paddingTop: 30,
        }, {
            paddingTop: 20,
        }),
        padding: 10,
        borderColor: '#e9e9e9',
        borderBottomWidth: 1,
    },
    drawerLogo: {
        fontSize: 30,
        color: Colors.brandGreen,
        marginTop: 4,
        marginLeft: 10
    },
    drawerProfileImg: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignSelf: 'center',
        marginBottom: 0
    },
    username: {
        marginLeft: 10,
        marginTop: 8
    },
    name: {
        fontSize: 18,
        marginBottom: 5
    },
    link: {
        color: Colors.primaryColor,
        fontSize: 12
    },
    trigger: {
        position: 'absolute',
        right: -37,
        top: deviceHeight / 3
    },
    triggerIcon: {
        width: 60,
        height: 100
    }
})

export default styles
