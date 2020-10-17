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
        marginBottom: 20,
        color: Colors.primaryColor
    },
    section: {
        marginBottom: 20
    },
    flexRow: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    customBadge : {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#eee'
    },
    customBadgeContainer : {
        marginRight : 30
    }
});

export default styles
