import React from 'react'
import styles from './styles'
import { Text, View } from 'react-native'
import Tabs from '../main'
import { Colors } from 'arivaa-basic/styles'

var view = function () {
    const tabs = [
        {
            title: 'First Tab',
            content: <View style={[styles.content]}><Text>First Tab Content</Text></View>
        },
        {
            title: 'Second Tab',
            content: <View style={[styles.content]}><Text>Second Tab Content</Text></View>
        },
        {
            title: 'Third Tab',
            content: <View style={[styles.content]}><Text>Third Tab Content</Text></View>
        }
    ]
    return (
        <View style={[styles.container]}>
            <Text style={[styles.description]}>
                A Tabs component is used to allow users to switch between different views.
                Theme of the tab can be easily changed.
            </Text>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Default Tabs</Text>
                <Tabs
                    tabs={tabs}
                />
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Custom Tabs</Text>
                <Tabs
                    style={{ backgroundColor:Colors.primaryColor,elevation:0}}
                    tabs={tabs}
                    theme={'white'}
                    indicatorStyle={{ backgroundColor: 'white' }}
                />
            </View>
        </View>
    )
}
module.exports = view
