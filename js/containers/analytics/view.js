import React from 'react'
import styles from './styles'
import { ScrollView, Text, View } from 'react-native'
import { Button, Toast } from 'antd-mobile-rn'
import { LinkBack } from 'arivaa-basic'
import { recordScreenTransition, trackEvent } from '../../utils/analytics'
import Hyperlink from 'react-native-hyperlink'

var view = function () {
    const {translate} = this.props

    return (
        <View style={[styles.container]}>
            <View style={[styles.back]}>
                <LinkBack/>
            </View>
            <ScrollView>
                <View style={[styles.content]}>
                    <View style={[styles.elementView]}>
                        <Text style={[styles.header]}>
                            Analytics
                        </Text>
                        <View style={[styles.element]}>
                            <Text style={[styles.description]}>
                                Segment Analytics helps you analyze the behaviour of your users by tracking
                                different screen transitions and events in the app
                            </Text>
                            <View style={[styles.analytics]}>
                                <View style={[styles.section]}>
                                    <Text style={[styles.title]}>Fire Test Event</Text>
                                    <View style={[styles.item]}>
                                        <Button onClick={() => {
                                            trackEvent('Test Event', {
                                                'description': 'Test Event by Arivaa Firebase'
                                            })
                                            Toast.success('Event Fired Successfully')
                                        }}>
                                            <Text style={[styles.text]}>Fire Test Event</Text>
                                        </Button>
                                    </View>
                                </View>
                                <View style={[styles.section]}>
                                    <Text style={[styles.title]}>Fire Screen Transition</Text>
                                    <View style={[styles.item]}>
                                        <Button onClick={() => {
                                            recordScreenTransition('Analytics Screen', {
                                                'description': 'Analytics Screen transition by Arivaa Firebase'
                                            })
                                            Toast.success('Screen Transition Fired Successfully')
                                        }}>
                                            <Text style={[styles.text]}>Fire Screen Transition</Text>
                                        </Button>
                                    </View>
                                </View>
                                <View style={[styles.section]}>
                                    <Text style={[styles.label]}>For Checking Data</Text>
                                    <Hyperlink linkDefault={true} linkStyle={{color: '#2980b9'}}>
                                        <Text style={[styles.info]}>Visit : https://app.segment.com</Text>
                                    </Hyperlink>
                                </View>
                                <View style={[styles.section]}>
                                    <Text style={[styles.label]}>Use this Credentials</Text>
                                    <Text style={[styles.info]}>Email : inderdeep.singh@laxaar.com</Text>
                                    <Text style={[styles.info]}>Password : Arivaa@123</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
module.exports = view
