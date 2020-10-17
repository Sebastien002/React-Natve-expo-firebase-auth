import React from "react-native";
import {Colors} from "arivaa-basic/styles";

var styles = React.StyleSheet.create({
    image: {
        width: null,
        height: 300
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
    overlayContent: {
        padding: 10,
    },
    overlayTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    },
    overlaySubTitle: {
        color: '#fff',
        fontSize: 13
    },
    footerContent: {
        flexDirection: 'row'
    },
    inline: {
        flexDirection: 'row',
        padding: 10,
        paddingRight: 30
    },
    icon: {
        fontSize: 20,
        color: Colors.primaryColor,
        fontWeight: 'bold'
    },
    count: {
        fontSize: 15,
        marginLeft: 4,
        lineHeight: 22,
    },
    cardFooter: {
        paddingHorizontal: 0
    }
})

export default styles
