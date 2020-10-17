import React from "react-native";
import {Colors} from "arivaa-basic/styles";

var styles = React.StyleSheet.create({
    navigationView: {
        backgroundColor: '#fafafa',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: Colors.brandLightGrey
    },
    active: {
        color: Colors.primaryColor,
        fontWeight: 'bold'
    },
    navigation: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15
    },
    navigationItem: {
        width: 60,
        alignItems: 'center'
    },
    navigationIcon: {
        color: Colors.primaryGreyColor,
        fontSize: 24,
        fontWeight: 'bold'
    },
    navigationText: {
        color: Colors.primaryGreyColor,
        fontSize: 12,
        fontWeight: 'bold'
    }
})

export default styles
