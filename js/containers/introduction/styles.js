import React from 'react-native';
import {Colors, Button} from 'arivaa-basic/styles';
import Dimensions from 'Dimensions';
var screenWidth = Dimensions.get('window').width;

var styles = React.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        width: undefined,
        height: undefined
    },
    close: {
        position: 'absolute',
        top: 15,
        right: 15,
        zIndex: 2
    },
    closeIcon: {
        color: '#ddd',
        fontSize: 70
    },
    slides: {
        flex: 0.9
    },
    actions: {
        flex: 0.1,
        backgroundColor: Colors.primaryColor,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        ...Button.button,
        backgroundColor: Colors.brandYellow,
        alignSelf: 'stretch',
        flex: 1,
        margin: 10
    },
    buttonText: {
        ...Button.buttonText,
        color: '#333'
    },
    signInBtn: {
        marginRight: 0
    },
    slide: {
        width: screenWidth,
        justifyContent: 'center',
        alignItems: 'center'
    },
    slideGraphics: {
        width: 150,
        height: 150,
        marginBottom: 30,
        backgroundColor: '#edebe0',
        borderRadius: 100,
        borderColor: '#f07766',
        borderWidth: 1,
        borderStyle: 'solid'
    },
    slideTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    slideDescription: {
        fontSize: 18,
        textAlign: 'center',
        margin: 10,
        lineHeight: 28
    }
});

export default styles;
