import React from "react-native";
import {Colors} from "arivaa-basic/styles";

var styles = React.StyleSheet.create({
    thumbnails: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 20,
        justifyContent: 'center'
    },
    thumbnailLink: {
        width: 50,
        height: 50,
        marginRight: 10,
        backgroundColor: '#f7f7f7',
        borderWidth: 1,
        borderColor:'transparent',
        overflow: 'hidden'
    },
    thumbnail: {
        width: 50,
        height: 50,
        overflow: 'hidden'
    },
    selectedThumbnail: {
        borderColor: Colors.primaryColor,
        borderWidth: 1
    },
    arrows: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        width: '100%',
        top: '40%'
    },
    arrow: {
        color: Colors.primaryColor,
        fontSize: 40
    }
})

export default styles
