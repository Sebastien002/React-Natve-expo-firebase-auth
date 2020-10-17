import React from 'react'
import styles from './styles'
import { ScrollView, Text, View } from 'react-native'
import { Button, List } from 'antd-mobile-rn'
import logo from '../../../assets/logo.png'
import RadioForm from 'react-native-simple-radio-button'
import { Link } from 'arivaa-basic'
import Icon from '../../core/components/icon';
import Image from '../../core/components/image';

/**
 * Returns the JSX Markup for the view
 * @returns {XML}
 */


var view = function () {
    const {navigation} = this.props;
    return (
        <View style={[styles.container]}>
            <ScrollView style={[styles.scrollView]}>
                <View style={[styles.logoContainer]}>
                    <Image
                        resizeMode="contain"
                        source={logo}
                        style={[styles.logo]}
                    />
                </View>
                <View style={[styles.language]}>
                    <Text style={[styles.label]}>Select App Language</Text>
                    <RadioForm
                        ref="radioForm"
                        radio_props={this.radio_props}
                        initial={0} //Index of selected language
                        labelHorizontal={true}
                        formHorizontal={true}
                        buttonColor={'#fff'}
                        selectedButtonColor={'#fff'}
                        selectedLabelColor={'#fff'}
                        buttonInnerColor={'#fff'}
                        buttonOuterColor={'#fff'}
                        labelColor={'#fff'}
                        labelStyle={{marginRight: 15}}
                        buttonSize={15}
                        animation={true}
                        onPress={this.switchLanguage.bind(this)}
                    />
                </View>
                <View style={[styles.form]}>
                    <List styles={{
                        Body: styles.list
                    }}>
                        <Button onClick={() => {
                            navigation.navigate('login')
                        }} type="default" style={[styles.button]}>
                            <Text style={[styles.buttonText]}>
                                Get Started with App
                            </Text>
                        </Button>
                    </List>
                </View>
                <Text style={[styles.separator]}>OR</Text>
                <View style={[styles.new]}>
                    <Link style={[styles.link]} link="elements">
                        <View style={[styles.linkView]}>
                            <Text style={[styles.text]}>Try UI Component Demos</Text>
                            <Icon type="foundation" style={[styles.icon]} name='burst-new'/>
                        </View>
                    </Link>
                </View>
            </ScrollView>
        </View>
    )
}

module.exports = view;
