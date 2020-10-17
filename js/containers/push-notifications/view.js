import React from 'react'
import styles from './styles'
import { ScrollView, Text, View } from 'react-native'
import { LinkBack,goToExternalLink, Form } from 'arivaa-basic'
import { Button } from 'antd-mobile-rn'

var view = function () {
    const {notification} = this.state;
    const formElements = [
        {
            name: 'text',
            inputProps: {
                clear: true,
                placeholder: 'Enter Notification Text',
                labelNumber: 1.5,
                style: [styles.input]
            },
            options: this.validations.text,
            before: (
                <Text style={[styles.label]}>
                    Enter Notification Text <Text style={[styles.required]}>*</Text>
                </Text>
            )
        }]

    return (
        <View style={[styles.container]}>
            <View style={[styles.back]}>
                <LinkBack/>
            </View>
            <ScrollView>
                <View style={[styles.content]}>
                    <View style={[styles.elementView]}>
                        <Text style={[styles.header]}>
                            Push Notifications
                        </Text>
                        <View style={[styles.element]}>
                            <Text style={[styles.description]}>
                                Push Notifications are an important feature to, as "growth hackers" would say, retain
                                and re-engage users.
                            </Text>
                            <View style={[styles.section]}>
                                <Text style={[styles.title]}>Remote Push Notifications</Text>
                                <View style={[styles.item]}>
                                    <Form
                                        elements={formElements}
                                        style={{
                                            Body: styles.list
                                        }}
                                        onSubmit={this.onSubmit.bind(this)}
                                        submitTrigger={{
                                            buttonProps: {
                                                style: styles.button
                                            },
                                            textProps: {
                                                style: styles.buttonText
                                            },
                                            text: 'Get a Remote Notification (Will only work on real device)'
                                        }}

                                    >​
                                    </Form>
                                    {
                                        notification ? (
                                            <Text>Received a Notification with payload :
                                                {JSON.stringify(notification)}
                                            </Text>
                                        ) : null
                                    }
                                </View>
                            </View>
                            <View style={[styles.section]}>
                                <Text style={[styles.title]}>Local Push Notifications</Text>
                                <View style={[styles.message]}>
                                    <Text style={[styles.label]}>Please Note</Text>
                                    <Text style={[styles.info]}>Notification will appear in notification bar. If you want it to appear as a popup, You will have to exit from the app </Text>
                                </View>
                                <View style={[styles.item]}>
                                    <Button onClick={this.scheduleLocalNotification.bind(this)}>
                                        <Text style={[styles.text]}>Local Notification - Notify after 5 seconds</Text>
                                    </Button>
                                </View>

                            </View>
                            <View style={[styles.section]}>
                                <Text style={[styles.title]}>Test push notifications via postman</Text>
                                <Text style={[styles.description]}>Test push notifications via postman, check our documentation</Text>
                            <View style={[styles.item]}>
                                    <Button onClick={goToExternalLink.bind(this,"https://arivaa-firebase-docs.laxaar.com/architecture/push-notifications")}>
                                        <Text style={[styles.text]}>Documentation</Text>
                                    </Button>
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
