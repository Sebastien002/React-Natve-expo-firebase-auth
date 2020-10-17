import React from "react-native";
import {Colors} from "arivaa-basic/styles";

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
        marginBottom: 5,
        color: Colors.primaryColor
    },
    section: {
        marginBottom: 20
    },
    icons: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    icon: {
        color: Colors.brandGrey,
        fontSize: 25,
        marginRight: 30,
        marginBottom: 10
    },
    message: {
        fontSize: 13,
        marginBottom: 20,
        color: Colors.primaryGreyColor
    }
})

export default styles
