import React from 'react'
import styles from './styles'
import {View, Text} from 'react-native'
import ArivaaButton from '../main'
import Icon from '../../icon'

var view = function () {
    return (
        <View style={[styles.container]}>
            <Text style={[styles.description]}>
                A Button component will be useful to trigger an operation.
            </Text>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Primary Large Button</Text>
                <ArivaaButton
                    type="primary"
                    size="large"
                    style={[styles.button]}>Primary</ArivaaButton>
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Primary Small Button</Text>
                <ArivaaButton
                    type="primary"
                    size="small"
                    style={[styles.button]}>Primary</ArivaaButton>
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Disabled State of Button</Text>
                <ArivaaButton
                    type="primary"
                    size="large"
                    disabled={true}
                    text={'Disabled'}
                    style={[styles.button]}/>
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Warning Button</Text>
                <ArivaaButton
                    type="warning"
                    size="large"
                    text={'Warning'}
                    style={[styles.button]}/>
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Loading State</Text>
                <ArivaaButton
                    type="default"
                    size="large"
                    text={'Loading'}
                    loading={true}
                    style={[styles.button]}/>
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Success Button</Text>
                <ArivaaButton
                    type="success"
                    size="large"
                    text={'Success'}
                    style={[styles.button]}/>
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Bordered Button</Text>
                <ArivaaButton
                    type="bordered"
                    size="large"
                    text={'Bordered'}/>
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Rounded Button</Text>
                <ArivaaButton
                    type="rounded"
                    size="large"
                    text={
                        <Icon type="feather" name={'search'} size={20} color="#fff"/>}
                    textStyle={[styles.successBtnStyle]}/>
            </View>
        </View>
    )
}
module.exports = view
