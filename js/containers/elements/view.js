import React from 'react'
import styles from './styles'
import { ScrollView, View, Text } from 'react-native'
import { Demo as DemoList, LinkBack } from 'arivaa-basic'
import { List } from 'antd-mobile-rn'

const Item = List.Item

var view = function () {
    console.log(DemoList)
    return (
        <View style={[styles.container]}>
            <View style={[styles.back]}>
                <LinkBack/>
            </View>
            <ScrollView>
                <View style={[styles.content]}>
                    {
                        (DemoList || []).map((demo, demoIndex) => {
                            return (
                                <View style={[styles.elements]} key={demoIndex}>
                                    <List renderHeader={() => <Text style={[styles.header]}>{demo.name}</Text>}>
                                        {
                                            (demo.components || []).map((component, componentIndex) => {
                                                return (
                                                    <Item key={componentIndex} arrow="horizontal"
                                                          onClick={this.goToComponent.bind(this, component)}>
                                                        {component.name}
                                                    </Item>
                                                )
                                            })
                                        }
                                    </List>
                                </View>
                            )
                        })
                    }

                </View>
            </ScrollView>
        </View>
    )
}
module.exports = view
