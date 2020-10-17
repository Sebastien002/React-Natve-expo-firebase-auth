import React from 'react-native';
import {Colors, Button} from 'arivaa-basic/styles';

var styles = React.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primaryColor,
        padding: 15
    },
    back: {
        marginTop: 20,
        paddingBottom: 10
    },
    logoContainer: {
        marginTop: 10,
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
        paddingTop: 10,
    },
    list: {
        backgroundColor: 'transparent'
    },
    input: {
        borderColor: Colors.primaryColor,
        backgroundColor: Colors.inputBackgroundColor,
        height: 50,
        marginBottom: 10,
        marginLeft: 0,
        paddingLeft: 15,
        borderBottomWidth: 0,
    },
    inputIcon: {
        width: 18
    },
    button: {
        marginBottom: 10,
        borderRadius: 2,
        borderWidth: 0,
        height: 50,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    buttonText: {
        color: Colors.primaryColor,
        fontSize:15
    }
});

export default styles;
