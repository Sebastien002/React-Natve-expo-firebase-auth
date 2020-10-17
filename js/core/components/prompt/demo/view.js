import React from 'react'
import styles from './styles'
import {View, Text, Alert} from 'react-native'
import Button from '../../button'
import prompt from '../main'

var view = function () {
    return (
        <View style={[styles.container]}>
            <Text style={[styles.description]}>
                A Prompt component is useful when you need to ask for some quick information from a user.
            </Text>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Prompt Component Demo</Text>
                <Button
                    onClick={async () => {
                        let value = await prompt('Your information', 'Please enter your info')
                        alert(value)
                    }} type={'bordered'} text={'Show Prompt'}/>
            </View>
        </View>
    )
}
module.exports = view
