import React, {Dimensions} from "react-native";
import {Colors} from "arivaa-basic/styles";

let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height

var styles = React.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    imageContainer: {
        flex: 1,
        alignItems: 'stretch',
        overflow: 'hidden'
    },
    image: {
        flex: 1,
        width: deviceWidth
    },
    trigger: {
        position: 'absolute',
        left: -24,
        top: deviceHeight / 3
    },
    triggerIcon: {
        width: 60,
        height: 100
    },
    link: {
        height: 80,
        alignItems: 'center',
        justifyContent: 'center'
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
