import React from 'react'
import styles from './styles'
import {View, Text} from 'react-native';
import ArivaaButton from '../../button';
import ToastComponent from '../toast-component'
import Toast from '../toast'
import {getRandom} from '../../util'
var view = function () {

    return (
        <View style={[styles.container]}>
            <Text style={[styles.description]}>
                A lightweight feedback or tips, used to display content that does not interrupt user operations.
                Suitable for page transitions, data interaction and other scenes. It can directly called or
                used as a component
            </Text>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Success Toast</Text>
                <ArivaaButton type="bordered"
                              onClick={Toast.success.bind(this, "Your account has been created successfully")}
                              text="Success Toast"
                />
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Error Toast</Text>
                <ArivaaButton type="bordered" onClick={Toast.fail.bind(this, "Server Error")}
                              text="Error Toast"
                />
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Loading Toast</Text>
                <ArivaaButton type="bordered" onClick={() => {
                    Toast.loading("Please wait!", 2)
                }} text="Loading Toast"/>

            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Info Toast</Text>
                <ArivaaButton type="bordered"
                              onClick={Toast.info.bind(this, "You account ID is " + getRandom("number"))}
                              text="Info Toast"
                />
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Offline Toast</Text>
                <ArivaaButton type="bordered" onClick={Toast.offline.bind(this, "Connection Lost")}
                              text="Offline Toast"/>
            </View>

            <View style={[styles.section]}>
                <Text style={[styles.title,styles.margin]}>Toast as a Component</Text>
                <Text style={[styles.message]}>(Useful in case scenarios like inside React Native Modal where actionsheet
                    can not be put above modal)</Text>
                <ArivaaButton
                    type="bordered"
                    onClick={() => {
                        this.toastRef.success("Toast Success")
                    }}
                    text="Toast as a Component"
                />
            </View>
            <ToastComponent
                ref={(ref) => {
                    this.toastRef = ref
                }}
            />
        </View>
    )
}
module.exports = view
