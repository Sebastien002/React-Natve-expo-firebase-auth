import React from 'react'
import styles from './styles'
import { ScrollView, Text, View } from 'react-native'
import { LinkBack } from 'arivaa-basic'

var view = function () {
    const {scrollEnabled} = this.state;
    const {navigation} = this.props;
    const {params} = navigation.state;

    return (
        <View style={[styles.container]}>
            <View style={[styles.back]}>
                <LinkBack/>
            </View>
            <ScrollView scrollEnabled={scrollEnabled}>
                <View style={[styles.content]}>
                    <View style={[styles.elementView]}>
                        <Text style={[styles.header]}>
                            {params.name}
                        </Text>
                        <View style={[styles.element]}>
                            {params.component ? <params.component.default /> : null}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
module.exports = view
