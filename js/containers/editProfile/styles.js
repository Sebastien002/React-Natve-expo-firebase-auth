import React from 'react-native'
import { Colors, Button } from 'arivaa-basic/styles'

const stylesObj = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 40
    },
    scrollBox: {
        flex: 1,
    },
    content: {
        paddingBottom: 100,
        paddingTop: 20,
    },
    button: {
        marginBottom: 10,
        marginTop: 30,
        borderRadius: 2,
        borderWidth: 0,
        height: 57,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.2,
        shadowRadius: 2,
        backgroundColor: Colors.primaryColor
    },
    buttonText: {
        color: '#fff'
    },
    form: {
        backgroundColor: '#fff',
        margin: 10,
        marginTop: 0,
    },
    fieldLabel: {
        color: Colors.primaryColor,
        marginBottom: 10
    },
    input: {
        marginBottom: 25,
        borderWidth: 0,
        borderBottomWidth: 1,
        padding: 0,
        paddingLeft: 0,
        height: 35,
        margin: 0
    },
    inputIcon: {
        color: Colors.brandGrey,
    },
    imageBox: {
        marginTop: 38,
        marginBottom: 20,
        width: 150,
        alignSelf: 'center'
    },
    image: {
        borderColor: Colors.brandLightGrey,
        borderWidth: 1,
        width: 150,
        height: 150,
        borderRadius: 75,
        alignSelf: 'center'
    },
    changeImageLink: {
        padding: 10,
        marginTop: 5
    },
    text: {
        color: Colors.primaryColor,
        textAlign: 'center'
    },
    back: {
        paddingLeft: 10
    },
    backIcon: {
        width: 20,
        height: 20
    },
    countryCode: {
        marginBottom: 20
    },
    countryCodeValue: {
        color: '#777'
    },
    message: {
        color: Colors.primaryGreyColor,
        marginTop: -10
    },
    phoneNumberField: {
        marginTop: 20
    }
}
var styles = React.StyleSheet.create(stylesObj)
export {
    stylesObj
}
export default styles
