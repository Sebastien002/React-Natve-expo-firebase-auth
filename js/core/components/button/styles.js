import React from "react-native";
import {Colors} from "arivaa-basic/styles";

var styles = React.StyleSheet.create({
    primary: {
        backgroundColor: Colors.primaryColor,
        borderColor: Colors.primaryColor
    },
    success: {
        backgroundColor: '#2ECC71',
        borderColor: '#2ECC71'
    },
    successText: {
        color: '#fff',
        fontSize: 14
    },
    rounded: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#108ee9',
        borderColor: '#108ee9'
    },
    bordered: {
        backgroundColor: '#f5f5f5',
        borderColor: '#e6e6e6'
    },
    borderedText: {
        color: Colors.primaryColor,
        fontSize: 14
    }
})

export default styles
