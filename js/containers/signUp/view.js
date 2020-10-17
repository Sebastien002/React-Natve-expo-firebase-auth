import React from 'react'
import styles from './styles'
import { View, Text, Image, ScrollView } from 'react-native'
import { Input, Link, Form, ModalTrigger, SocialSignIn } from 'arivaa-basic'
import { List, InputItem, Button } from 'antd-mobile-rn'
import logo from '../../../assets/logo.png'
import envelope from '../../../assets/envelope.png'
import lock from '../../../assets/lock.png'
import facebook from '../../../assets/facebook.png'
import google from '../../../assets/google.png'
import twitter from '../../../assets/twitter.png'
import Ionicons from '@expo/vector-icons/Ionicons'
import Icon from '@expo/vector-icons/FontAwesome'
import { Environment } from '../../config'
import { getInputStyle } from '../../utils/antd'
import CustomWebView from '../../components/CustomWebView'

/**
 * Returns the JSX Markup for the view
 * @returns {XML}
 */
var view = function () {
    const {name, email, password, phone} = this.validations
    const {translate} = this.props
    const {githubSignIn, twitterSignIn} = this.state
    const formElements = [
        {
            type: 'text',
            name: 'name',
            inputProps: {
                clear: true,
                placeholder: translate('common.name.placeholder'),
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
                    <Ionicons
                        name={'ios-person'}
                        size={25}
                        color="#fff"
                        style={[styles.userIcon]}/>
                )
            },
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
            options: password
        }
    ]
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
                            text: translate('signUp.signUp')
                        }}
                    >
                    </Form>
                </View>
            </ScrollView>
            <View style={[styles.options]}>
                <View>
                    <Text style={[styles.optionLabel]}>{translate('signUp.member')}</Text>
                    <Link
                        textStyle={[styles.textLink]}
                        text={translate('signUp.label')}
                        link="login"/>
                </View>
                <View style={[styles.separator]}>
                </View>
                <View>
                    <Text style={[styles.optionLabel]}>{translate('signUp.social')}</Text>
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
                            <Icon name={'github-square'} style={[styles.githubIcon]}/>
                        </Link>
                    </View>
                </View>
            </View>
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
