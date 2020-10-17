import React from 'react-native'
import { Colors } from 'arivaa-basic/styles'

var styles = React.StyleSheet.create({
    container: {
        padding: 10,
    },
    description: {
        paddingVertical: 20,
        lineHeight: 22,
        color: Colors.brandGrey
    },
    title: {
        fontWeight: 'bold',
        marginBottom: 20,
        color: Colors.primaryColor
    },
    margin: {
        marginBottom: 5
    },
    message: {
        fontSize: 13,
        marginBottom: 20,
        color: Colors.primaryGreyColor
    },
    section: {
        marginBottom: 20
    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    progress: {
        marginRight: 10
    },
    progressBarText: {
        textAlign: 'center',
        fontSize: 12
    },
    inline: {
        flexDirection: 'row'
    },
    pie:{
      alignSelf:'flex-start'
    },
    pieText:{
        textAlign: 'center',
        fontSize: 12,
        marginTop: 5
    }

})

export default styles
