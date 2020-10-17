import React, {Platform,Dimensions} from "react-native";

var styles = React.StyleSheet.create({
    close: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? 25 : 0,
        right: 15,
        zIndex: 2
    },
    closeIcon: {
        color: '#e6e6e6',
        fontSize: 40
    },
    flexOne: {
        flex: 1
    },
    modalContent: {
        height : Dimensions.get('window').height
    }
})

export default styles
