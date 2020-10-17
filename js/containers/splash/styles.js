import React from 'react-native'
import { Colors } from 'arivaa-basic/styles'

var styles = React.StyleSheet.create({
    container: {
        flex: 1
    },
    scrollView: {
        padding: 20,
        backgroundColor: Colors.primaryColor,
    },
    logoContainer: {
        marginTop: 100,
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch'
    },
    logo: {
        width: 200,
        height: 200,
        alignSelf: 'center'
    },
    form: {
        alignSelf: 'stretch',
        paddingTop: 20,
    },
    list: {
        backgroundColor: 'transparent'
    },
    language: {
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch'
    },
    label: {
        color: '#fff',
        marginBottom: 20,
        textAlign: 'center',
        fontWeight: 'bold'
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
    },
    buttonText: {
        color: Colors.primaryColor
    },
    separator: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
        marginBottom: 10
    },
    new: {
        backgroundColor: '#fff',
        height: 57,
        borderRadius: 2
    },
    link: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 2,
        borderWidth: 0,
        height: 57,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.2,
        shadowRadius: 2,
        paddingTop: 2,
        marginBottom: 50
    },
    linkView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontWeight: 'bold',
        color: Colors.brandGrey,
        marginRight: 8
    },
    icon: {
        fontSize: 50,
        color: Colors.primaryColor,
    }
})

export default styles
