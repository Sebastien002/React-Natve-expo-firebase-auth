import React from 'react-native'
import { Colors } from 'arivaa-basic/styles'

var styles = React.StyleSheet.create({
    customItemView: {
        backgroundColor: '#f7f7f7',
        borderRadius: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#e9e9e9',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 10,
        paddingRight: 10
    },
    customItemText: {
        flex: 1,
        fontSize: 14,
        color: Colors.primaryColor,
        textAlign: 'center'
    },
    customActionSheetView: {
        backgroundColor: '#fff',
        padding: 10
    },
    thumbnailView: {
        width: 70,
        backgroundColor: '#f7f7f7',
        marginRight: 10,
        marginBottom: 10,
        borderColor: '#e9e9e9',
        borderWidth: 1,
        borderRadius: 4,
        overflow: 'hidden'
    },
    thumbnail: {
        width: 70,
        height: 70,
    },
    thumbnailText: {
        fontSize: 11,
        color: Colors.primaryColor,
        textAlign: 'center',
        paddingVertical: 2
    },
    thumbnailActionSheetView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent:'center'
    },
    actionSheetItemIcon: {
        fontSize: 20,
        lineHeight: 20,
        color: Colors.primaryColor
    },
    cancelBtn: {
        backgroundColor: Colors.primaryColor,
        borderColor: Colors.primaryColor
    },
    cancelBtnText: {
        color: '#FFF'
    },

})

export default styles
