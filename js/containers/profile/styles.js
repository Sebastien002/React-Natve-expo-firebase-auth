import React from 'react-native'
import { Colors } from 'arivaa-basic/styles'

var styles = React.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 40
    },
    headerStyle: {
        backgroundColor: '#fff'
    },
    scrollBox: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        paddingBottom: 100
    },
    navigation: {
        backgroundColor: '#fafafa',
        padding: 10,
        paddingRight: 0,
        paddingLeft: 10,
        borderColor: Colors.brandLightGrey,
        borderTopWidth: 1,
    },
    navigationItem: {
        width: 90,
        backgroundColor: '#fff',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: Colors.brandLightGrey,
        marginRight: 10,
        paddingTop: 4,
        overflow: 'hidden'
    },
    itemIcon: {
        textAlign: 'center',
        fontSize: 25,
        color: Colors.brandRed
    },
    itemName: {
        textAlign: 'center',
        fontSize: 10,
        fontWeight: 'bold',
        padding: 4,
        paddingTop: 0,
        color: Colors.brandGrey
    },
    imagePicker: {
        alignItems: 'center'
    },
    userInformation: {
        marginTop: 50
    },
    info: {
        flexDirection: 'row',
        flex: 1,
        padding: 18,
        marginBottom: 5,
        backgroundColor: '#fafafa'
    },
    label: {
        width: 80,
        color: Colors.brandRed
    },
    separator: {
        width: 20
    },
    value: {
        color: Colors.brandGrey
    },
    editAction: {
        position: 'absolute',
        top: 48,
        right: 15
    },
    editBtn: {
        backgroundColor: '#fff',
    },
    editText: {
        color: '#999',
        fontSize: 13
    },
    editIcon: {
        color: Colors.primaryColor
    },
    back: {
        paddingLeft: 10
    },
    imageBox: {
        marginTop: 30
    },
    image: {
        borderColor: Colors.brandLightGrey,
        borderWidth: 1,
        width: 150,
        height: 150,
        resizeMode: 'cover',
        borderRadius: 75,
        alignSelf: 'center'
    }
})

export default styles
