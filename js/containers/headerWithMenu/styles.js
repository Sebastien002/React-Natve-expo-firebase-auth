import React, {Platform} from "react-native";
import {Colors} from "arivaa-basic/styles";

var styles = React.StyleSheet.create({
    header: {
        height: (Platform.OS === 'ios') ? 60 : 50,
        backgroundColor: Colors.primaryColor,
    },
    headerIcons: {
        width: 40,
        height: 40
    },
    headerDrawerIcon: {
        width: 28,
        height: 28,
        marginTop: 4
    },
    headerNav: {
        paddingTop: 0
    },
    headerLeftText: {
        position: 'absolute',
        left: 15,
        top: (Platform.OS === 'ios') ? 20 : 12,
        zIndex: 1,
        flexDirection: 'row'
    },
    headerRightText: {
        position: 'absolute',
        right: 15,
        top: (Platform.OS === 'ios') ? 30 : 10,
        flexDirection: 'row'
    },
    headerLeftIcon: {
        top: (Platform.OS === 'ios') ? 30 : 10,
    },
    headerRightIcon: {
        top: (Platform.OS === 'ios') ? 20 : 5,
    },
    menuIcon: {
        fontSize: 20,
        color: Colors.brandYellow,
        marginLeft: 20
    },
    menuIconSearch: {
        fontSize: 25,
        marginTop: -2
    },
    menuIconCart: {
        fontSize: 20,
        marginTop: -1
    },
    logo: {
        color: Colors.brandGreen,
        fontSize: 21,
        alignSelf: 'center',
        marginTop: -4,
        marginLeft: 15
    },
});

export default styles;
