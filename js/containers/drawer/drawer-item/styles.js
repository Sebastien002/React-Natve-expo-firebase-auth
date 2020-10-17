import React from "react-native";
import {Colors} from "arivaa-basic/styles";

var styles = React.StyleSheet.create({
    drawerItemText: {
        color: 'rgba(0, 0, 0, 0.85)',
        fontSize: 13
    },
    drawerNavList: {
        flex: 1,
        paddingBottom: 120
    },
    drawerNavItem: {
        flexDirection: 'row',
        padding: 20,
        paddingBottom: 15,
        paddingTop: 15,
        borderBottomWidth: 1,
        borderColor: '#e9e9e9'
    },
    drawerNavItemIcon: {
        marginRight: 15,
        marginTop: -5,
        width: 30,
        height: 25,
        color: Colors.brandRed
    },
    drawerNavItemText: {
        fontSize: 15,
        marginLeft: 10,
        color: '#707070'
    },
    newIcon: {
        fontSize: 40,
        color: Colors.primaryColor,
        position: 'absolute',
        right: -40,
        top: -11
    }
})

export default styles
