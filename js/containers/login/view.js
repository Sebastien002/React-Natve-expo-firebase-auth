import React from 'react'
import styles, { stylesObj } from './styles'
import { View, Text, Image, ScrollView, WebView } from 'react-native'
import { Icon, Link, Form, Modal, CountryCodePicker, SocialSignIn } from 'arivaa-basic'
import { Button } from 'antd-mobile-rn'
import logo from '../../../assets/logo.png'
import envelope from '../../../assets/envelope.png'
import lock from '../../../assets/lock.png'
import facebook from '../../../assets/facebook.png'
import google from '../../../assets/google.png'
import twitter from '../../../assets/twitter.png'
import phoneIcon from '../../../assets/phone.png'
import { Environment } from '../../config'
import { getInputStyle } from '../../utils/antd'
import CustomWebView from '../../components/CustomWebView'
import { Colors } from 'arivaa-basic/styles'

/**
 * Returns the JSX Markup for the view
 * @returns {XML}
 */
var view = function () {
    const {email, password, phone, countryCode} = this.validations
    const {translate} = this.props
    const {phoneSignIn, githubSignIn, twitterSignIn, confirmOtp, renderRecaptcha} = this.state
    let formElements
    if (phoneSignIn) {
        formElements = [
            {
                name: 'countryCode',
                customElement: (
                    <CountryCodePicker
                        colors={{
                            selectToggleText: '#FFF',
                            selectToggleIcon: '#FFF'
                        }}
                        styles={{
                            selectToggle: {
                                borderColor: Colors.primaryColor,
                                backgroundColor: Colors.inputBackgroundColor,
                                height: 50,
                                marginBottom: 10,
                                marginLeft: 0,
                                paddingHorizontal: 15,
                                borderBottomWidth: 0
                            }
                        }}
                    />
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
                    placeholderTextColor: '#fff',
                    styles: getInputStyle({
                        input: {
                            color: '#fff',
                            fontSize: 14
                        }
                    }),
                    children: (
                        <Image
                            resizeMode="contain"
                            source={phoneIcon}
                            style={[styles.inputIcon]}
                        />
                    )
                },
                options: phone
            }
        ]
    } else {
        formElements = [
            {
                type: 'email',
                name: 'email',
                inputProps: {
                    clear: true,
                    placeholder: translate('common.email.placeholder'),
                    labelNumber: 1.5,
                    style: [styles.input],
                    placeholderTextColor: '#fff',
                    styles: getInputStyle({
                        input: {
                            color: '#fff',
                            fontSize: 14
                        }
                    }),
                    children: (
                        <Image
                            resizeMode="contain"
                            source={envelope}
                            style={[styles.inputIcon]}
                        />
                    )
                },
                options: email
            },
            {
                type: 'password',
                name: 'password',
                inputProps: {
                    clear: true,
                    placeholder: translate('common.password.placeholder'),
                    labelNumber: 1.5,
                    style: [styles.input],
                    styles: getInputStyle({
                        input: {
                            color: '#fff',
                            fontSize: 14
                        }
                    }),
                    placeholderTextColor: '#fff',
                    children: (
                        <Image
                            resizeMode="contain"
                            source={lock}
                            style={[styles.inputIcon]}
                        />
                    )
                },
                after: (
                    <Link
                        textStyle={[styles.forgotPassword]}
                        text={translate('login.forgot')}
                        link="forgotPassword"/>
                ),
                options: password
            }
        ]
    }
    return (
        <View style={[styles.container]}>
            <ScrollView>
                <View style={[styles.logoContainer]}>
                    <Image
                        resizeMode="contain"
                        source={logo}
                        style={[styles.logo]}
                    />
                </View>
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
                            text: translate('login.label')
                        }}
                    >

                    </Form>
                    <Text style={[styles.separatorOr]}>OR</Text>
                    <Button style={styles.button} onClick={this.togglePhoneSignIn.bind(this)}>
                        <Text style={styles.buttonText}>
                            {
                                this.state.phoneSignIn ? (
                                    translate('login.emailLogin')
                                ) : (
                                    translate('login.labelPhone')
                                )
                            }
                        </Text>
                    </Button>
                </View>
            </ScrollView>
            <View style={[styles.options]}>
                <View>
                    <Text style={[styles.optionLabel]}>{translate('login.member')}</Text>
                    <Link
                        textStyle={[styles.textLink]}
                        text={translate('login.signUp')}
                        link="signUp"/>
                </View>
                <View style={[styles.separator]}>
                </View>
                <View>
                    <Text style={[styles.optionLabel]}>{translate('login.social')}</Text>
                    <View style={[styles.social]}>
                        <SocialSignIn
                            clientId={Environment.FACEBOOK.appId}
                            scopes={
                                Environment.FACEBOOK.scope
                            }
                            type="facebook"
                            triggerElement={
                                <Link>
                                    <Image
                                        resizeMode="contain"
                                        source={facebook}
                                        style={[styles.socialIcon]}
                                    />
                                </Link>
                            }
                            onSuccess={(result) => {
                                this.handleSocialSignIn('facebook', result)
                            }}
                            onError={(error) => {
                                this.handleSocialSignInError('facebook', error)
                            }}
                        />
                        <SocialSignIn
                            clientId={Environment.GOOGLE.appId}
                            scopes={
                                Environment.GOOGLE.scope
                            }
                            type="google"
                            triggerElement={
                                <Link>
                                    <Image
                                        resizeMode="contain"
                                        source={google}
                                        style={[styles.socialIcon]}
                                    />
                                </Link>
                            }
                            onSuccess={(result) => {
                                this.handleSocialSignIn('google', result)
                            }}
                            onError={(error) => {
                                this.handleSocialSignInError('google', error)
                            }}
                        />
                        <Link onPress={() => {this.setState({twitterSignIn: true})}}>
                            <Image
                                resizeMode="contain"
                                source={twitter}
                                style={[styles.socialIcon]}
                            />
                        </Link>
                        <Link onPress={() => {this.setState({githubSignIn: true})}}>
                            <Icon type="font-awesome" name={'github-square'} style={[styles.githubIcon]}/>
                        </Link>

                    </View>
                </View>
            </View>
            <Modal contentProps={{onVerify: this.verifyOtp.bind(this)}} modalId="verification" visible={confirmOtp}
                   onHide={() => {this.setState({confirmOtp: false})}}/>
            <CustomWebView
                visible={renderRecaptcha}
                scriptId="recaptcha"
                onSuccess={this.parseRecaptcha.bind(this)}
                onHide={() => {this.setState({renderRecaptcha: false})}}
                onFailMessage={translate('common.error.invalidCaptcha')}
                reloadOnFail={true}
            />
            <CustomWebView
                visible={twitterSignIn}
                scriptId="twitter"
                onSuccess={this.signInWithTwitter.bind(this)}
                onFailMessage={translate('login.fail') + ' twitter'}
                onHide={() => {this.setState({twitterSignIn: false})}}
            />
            <CustomWebView
                visible={githubSignIn}
                scriptId="github"
                onSuccess={this.signInWithGithub.bind(this)}
                onFailMessage={translate('login.fail') + ' github'}
                onHide={() => {this.setState({githubSignIn: false})}}
            />
        </View>
    )
}

module.exports = view
