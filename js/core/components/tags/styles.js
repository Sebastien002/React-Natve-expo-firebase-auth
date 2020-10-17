import React, { Platform } from 'react-native'
import { Colors } from 'arivaa-basic/styles'

var styles = React.StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    tag: {
        marginRight: 10,
        marginBottom: 10,
        overflow: (Platform.OS === 'ios') ? 'visible' : 'hidden',
    },
    addNew: {
        flexDirection: 'row',
        alignSelf: 'flex-start'
    },
    addBtn: {
        width: 50,
        height: 30,
    },
    input: {
        width: 150,
        height: 30,
        padding: 5,
        marginRight: 5,
        borderColor: '#e9e9e9',
        borderWidth: 1,
        backgroundColor: '#fff'
    }
})

export default styles
export const tagStyles = {
    disabledWrap: {
        backgroundColor: '#f5f5f5',
        marginRight: 10,
        marginBottom: 5,
        paddingVertical: 6,
        paddingHorizontal: 15,
        borderColor: '#e9e9e9',
        borderWidth: 1,
        borderRadius: 3
    },
    disabledText: {
        color: Colors.primaryColor,
        fontSize: 12,
        opacity: 0.5
    },
    activeWrap: {
        backgroundColor: '#ffffff',
        marginRight: 10,
        marginBottom: 5,
        paddingVertical: 6,
        paddingHorizontal: 15,
        borderColor: Colors.primaryColor,
        borderWidth: 1,
        borderRadius: 3,
    },
    close: {
        width: 20,
        height: 20,
        backgroundColor: Colors.primaryColor,
        position: 'absolute',
    },
    closeText: {
        color: '#fff',
        position: 'absolute',
        top: (Platform.OS === 'ios') ? -1 : 5,
        left: (Platform.OS === 'ios') ? 3.5 : 5,
    },
    activeText: {
        color: Colors.primaryColor,
        fontSize: 12,
    },
    normalWrap: {
        backgroundColor: '#ffffff',
        marginRight: 10,
        marginBottom: 5,
        paddingVertical: 6,
        paddingHorizontal: 15,
        borderColor: '#e9e9e9',
        borderWidth: 1,
        borderRadius: 3,
    },
    normalText: {
        color: Colors.primaryColor,
        fontSize: 12,
    }
}