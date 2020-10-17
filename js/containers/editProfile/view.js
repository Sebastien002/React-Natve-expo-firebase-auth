import React from 'react'
import styles, { stylesObj } from './styles'
import { View, Text, ScrollView, WebView } from 'react-native'
import {
    Input,
    LinkBack,
    Button,
    Link,
    Image,
    Form,
    ImagePicker,
    Modal,
    CountryCodePicker,
    ToastComponent
} from 'arivaa-basic'
import Icon from "../../core/components/icon";
import back from '../../../assets/back-pink.png'
import InputItemStyle from 'antd-mobile-rn/lib/input-item/style/index.native'
import CustomWebView from '../../components/CustomWebView'

/**
 * View
 * @returns {XML}
 */
var view = function () {
    const {name, email, phone, countryCode} = this.validations
    const {translate} = this.props
    const {profileImage, confirmOtp, renderRecaptcha} = this.state

    const formElements = [
        {
            type: 'text',
            name: 'name',
            inputProps: {
                clear: true,
                placeholder: translate('common.name.placeholder'),
                labelNumber: 1.5,
                style: [styles.input],
                styles: {
                    ...InputItemStyle,
                    input: {
                        ...InputItemStyle.input,
                        fontSize: 14
                    }
                },
                placeholderTextColor: '#555',
                children: (
                    <Icon
                        type="feather"
                        name={'user'}
                        size={20}
                        style={[styles.inputIcon]}/>
                )
            },
            before: (
                <Text style={[styles.fieldLabel]}>{translate('common.name.title')} *</Text>
            ),
            options: name
        },
        {
            type: 'email',
            name: 'email',
            inputProps: {
                clear: true,
                placeholder: translate('common.email.placeholder'),
                labelNumber: 1.5,
                style: [styles.input],
                styles: {
                    ...InputItemStyle,
                    input: {
                        ...InputItemStyle.input,
                        fontSize: 14
                    }
                },
                placeholderTextColor: '#555',
                children: (
                    <Icon
                        type="feather"
                        name={'mail'}
                        size={20}
                        style={[styles.inputIcon]}/>
                )
            },
            before: (
                <Text style={[styles.fieldLabel]}>{translate('common.email.title')} *</Text>
            ),
            options: email
        },
        {
            name: 'countryCode',
            customElement: (
                <CountryCodePicker
                    style={{
                        value: stylesObj.countryCodeValue,
                        listItem: stylesObj.countryCode
                    }}
                />
            ),
            before: (
                <Text style={[styles.fieldLabel]}>{translate('common.countryCode.title')}</Text>
            ),
            options: countryCode
        },
        {
            type: 'number',
            name: 'phone',
            inputProps: {
                clear: true,
                placeholder: translate('common.phone.placeholder'),
                labelNumber: 1.5,
                style: [styles.input],
                styles: {
                    ...InputItemStyle,
                    input: {
                        ...InputItemStyle.input,
                        fontSize: 14
                    }
                },
                placeholderTextColor: '#555',
                children: (
                    <Icon
                        type="feather"
                        name={'phone'}
                        size={20}
                        style={[styles.inputIcon]}/>
                )
            },
            before: (
                <Text style={[styles.fieldLabel,styles.phoneNumberField]}>{translate('profile.phone')}</Text>
            ),
            after: (
                <Text style={[styles.message]}>{translate('profile.phoneVerification')}</Text>
            ),
            options: phone
        }
    ]

    return (
        <View style={[styles.container]}>
            <View style={[styles.back]}>
                <LinkBack/>
            </View>
            <ScrollView>
                <View style={[styles.form]}>
                    <View style={[styles.imageBox]}>
                        <Image source={profileImage} style={[styles.image]}/>
                        <ImagePicker onImageSelected={this.changeImage.bind(this)}>
                            <View style={[styles.changeImageLink]}>
                                <Text style={[styles.text]}>
                                    <Icon type="ionicons" name='md-create'/> {translate('profile.changeImage')}
                                </Text>
                            </View>
                        </ImagePicker>
                    </View>
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
                            text: translate('profile.save')
                        }}
                    >
                    </Form>
                </View>
            </ScrollView>
            <Modal contentProps={{onVerify: this.verifyOtp.bind(this)}} modalId="verification" visible={confirmOtp}/>
            <CustomWebView
                visible={renderRecaptcha}
                scriptId="recaptcha"
                onSuccess={this.parseRecaptcha.bind(this)}
                onHide={() => {
                    this.setState({renderRecaptcha: false})
                }}
                onFailMessage={translate('common.error.invalidCaptcha')}
                reloadOnFail={true}
            />

        </View>
    )
}
module.exports = view
