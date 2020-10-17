import React, {Platform} from "react-native";

var styles = React.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'ios' ? 40 : 25,
    },
    content: {
        paddingBottom: 100
    },
    elementView: {
        marginTop: 10
    },
    header: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        fontSize: 14,
        color: '#757575',
        backgroundColor: '#f2f2f7'
    },
    back: {
        paddingLeft: 10
    }
})

export default styles
