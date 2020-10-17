import React from 'react'
import styles from './styles'
import { View, Image, ScrollView, Text } from 'react-native'
import lock from '../../../assets/lock.png'
import { Input, Button, Link, Form, ImagePicker, LinkBack } from 'arivaa-basic'
import { AntDesign } from '@expo/vector-icons';
import back from '../../../assets/back-pink.png'
import { getInputStyle } from '../../utils/antd'

var view = function () {
    const {password, cpassword, currentPassword} = this.validations
    const {user, translate} = this.props
    const formElements = [
        {
            type: 'password',
            name: 'currentPassword',
            inputProps: {
                clear: true,
                placeholder: translate('changePassword.oldPassword'),
                labelNumber: 1.5,
                style: [styles.input],
                placeholderTextColor: '#555',
                styles: getInputStyle({
                    input: {
                        color: '#555',
                        fontSize: 14
                    }
                }),
                children: (
                    <AntDesign
                        name={'lock'}
                        size={25}
                        style={[styles.inputIcon]}/>
                )
            },
            before: (
                <Text style={[styles.fieldLabel]}>{translate('changePassword.oldPassword')} *</Text>
            ),
            options: currentPassword
        },
        {
            type: 'password',
            name: 'password',
            inputProps: {
                clear: true,
                placeholder: translate('common.password.placeholder'),
                labelNumber: 1.5,
                style: [styles.input],
                placeholderTextColor: '#555',
                styles: getInputStyle({
                    input: {
                        color: '#555',
                        fontSize: 14
                    }
                }),
                children: (
                    <AntDesign
                        name={'lock'}
                        size={25}
                        style={[styles.inputIcon]}/>
                )
            },
            before: (
                <Text style={[styles.fieldLabel]}>{translate('changePassword.password')} *</Text>
            ),
            options: password
        },
        {
            type: 'password',
            name: 'cpassword',
            inputProps: {
                clear: true,
                placeholder: translate('common.confirmPassword.placeholder'),
                labelNumber: 1.5,
                style: [styles.input],
                placeholderTextColor: '#555',
                styles: {
                    input: {
                        color: '#555',
                        fontSize: 14
                    }
                },
                children: (
                    <AntDesign
                        name={'lock'}
                        size={25}
                        style={[styles.inputIcon]}/>
                )
            },
            before: (
                <Text style={[styles.fieldLabel]}>{translate('changePassword.confirm')} *</Text>
            ),
            options: cpassword
        }
    ]
    return (
        <View style={[styles.container]}>
            <View style={[styles.back]}>
                <LinkBack/>
            </View>
            <ScrollView>
                <View style={[styles.content]}>
                    <View style={[styles.elementView]}>
                        <Text style={[styles.header]}>
                            {translate('changePassword.title')}
                        </Text>
                        <View style={[styles.element]}>
                            <Text style={[styles.description]}>
                                {translate('changePassword.noCurrentPassword')}
                            </Text>
                            <View style={[styles.form]}>
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
                                        text: translate('changePassword.submit')
                                    }}
                                >
                                </Form>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
module.exports = view
