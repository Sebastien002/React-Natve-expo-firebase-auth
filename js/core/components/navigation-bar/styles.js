import React, {Platform} from "react-native";
import {Colors} from "arivaa-basic/styles";

var styles = React.StyleSheet.create({
    header: {
        height: (Platform.OS === 'ios') ? 60 : 50,
        backgroundColor: '#e6e6e6',
    },
    headerLeft: {
        position: 'absolute',
        left: 10,
        top: (Platform.OS === 'ios') ? 22 : 10,
        zIndex: 1,
        flexDirection: 'row',
    },
    headerTitle: {
        color: '#000',
        textAlign: 'center',
        marginTop: 4
    },
    headerRight: {
        position: 'absolute',
        right: 10,
        top: (Platform.OS === 'ios') ? 22 : 16,
        flexDirection: 'row',
    },
    leftLink: {
        marginRight: 15
    },
    rightLink: {
        marginLeft: 15
    },
    content: {
        color: Colors.primaryColor
    }
})

export default styles
