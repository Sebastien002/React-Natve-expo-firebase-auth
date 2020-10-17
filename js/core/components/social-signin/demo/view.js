import React from 'react'
import styles from './styles'
import {View, Text} from 'react-native'
import SocialSignIn from '../main'
import Button from '../../button'

var view = function () {
    return (
        <View style={[styles.container]}>
            <Text style={[styles.description]}>
                A Social Sign In component will help users to sign in or register using social platforms like Facebook
                or Google.
            </Text>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Social Sign In with Facebook</Text>
                <SocialSignIn
                    clientId={
                        '2305380699696994'
                    }
                    scopes={
                        ['profile', 'email']
                    }
                    type="facebook"
                    triggerElement={
                        <Button type="primary" style={[styles.facebookBtn]} textStyle={styles.buttonText}
                                text={'Sign In With Facebook'}/>
                    }
                    onSuccess={(result) => {
                        alert('Logged into facebook Successfully - Response - ' + JSON.stringify(result))
                    }}
                    onError={(error) => {
                        alert('Error while logging into facebook - Response - ' + JSON.stringify(error))
                    }}
                />
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Social Sign In with Google</Text>
                <SocialSignIn
                    clientId={
                        ['69935791112-29dfkr3n0fhtp7s0k51ctleireu44sqq.apps.googleusercontent.com',
                            '69935791112-f29ach1noraci1cv5ben4evobtb1hir7.apps.googleusercontent.com']
                    }
                    scopes={
                        ['profile', 'email']
                    }
                    type="google"
                    triggerElement={
                        <Button type="primary" style={[styles.googleBtn]} textStyle={styles.buttonText}
                                text={'Sign In With Google'}/>
                    }
                    onSuccess={(result) => {
                        alert('Logged into google Successfully - Response - ' + JSON.stringify(result))
                    }}
                    onError={(error) => {
                        console.log({error});
                        alert('Error while logging into google.')
                    }}
                />
            </View>
        </View>
    )
}
module.exports = view
