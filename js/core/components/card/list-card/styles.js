import React from 'react-native'

var styles = React.StyleSheet.create({
    item: {
        padding: 10,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#e9e9e9'
    },
    lastItem: {
        borderBottomWidth: 0,
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    text: {
        marginLeft: 10,
        marginTop: 2
    },
    title: {
        fontWeight: 'bold'
    },
    subTitle: {
        color: '#bdbdbd'
    }
})

export default styles
