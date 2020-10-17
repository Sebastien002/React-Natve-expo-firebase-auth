import React from "react-native";
import {Colors} from "arivaa-basic/styles";

var styles = React.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primaryColor,
        padding: 20
    },
    back: {
        marginTop: 20,
    },
    logoContainer: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch'
    },
    logo: {
        width: 130,
        height: 100,
        alignSelf: 'flex-start'
    },
    pageTitle: {
        color: '#fff',
        fontSize: 25,
        marginBottom: 10,
        fontWeight: 'bold'
    },
    message: {
        color: '#fff',
        fontSize: 15,
        lineHeight: 22
    },
    form: {
        alignSelf: 'stretch',
        paddingTop: 30
    },
    list: {
        backgroundColor: 'transparent'
    },
    input: {
        borderColor: Colors.primaryColor,
        backgroundColor: Colors.inputBackgroundColor,
        height: 56,
        marginBottom: 20,
        marginLeft: 0,
        paddingLeft: 15,
        borderBottomWidth: 0,
        marginTop: 20
    },
    inputIcon: {
        width: 18
    },
    button: {
        marginBottom: 10,
        borderRadius: 2,
        borderWidth: 0,
        height: 57,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.2,
        shadowRadius: 2,
        backgroundColor: '#fff'
    },
    buttonText: {
        color: Colors.primaryColor
    }
});

export default styles;
