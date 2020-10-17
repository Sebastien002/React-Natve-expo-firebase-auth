import React from 'react'
import styles from './styles'
import { View, Text } from 'react-native'
import ArivaaActionSheet from '../main'
import ArivaaActionSheetComponent from '../actionsheet-component'
import Toast from '../../toast'
import Button from '../../button'

import Icon from '../../icon'
import { ModalTrigger } from '../../modal/index'
import { Colors } from 'arivaa-basic/styles'

var view = function () {
    const data = [
        {
            title: 'Operation 1',
            action: this.action,
            icon: 'check-circle'
        }, {
            title: 'Operation 2',
            action: this.action,
            icon: 'feather'
        }, {
            title: 'Operation 3',
            action: this.action,
            icon: 'flag'
        },
        {
            title: 'Cancel',
            action: null,
            style: {
                backgroundColor: Colors.primaryColor,
                borderColor: Colors.primaryColor
            },
            textStyle: {
                color: '#fff'
            }
        }
    ]
    //The only solution to image picker is to let the user pass a reference to actionsheet in case of modal
    return (
        <View style={[styles.container]}>
            <Text style={[styles.description, {
                paddingBottom: 5
            }]}>
                Action sheet is normally used to allow user to choose a action from a list
                of actions. We allow both native and our customly designed action
                sheets to choose from.
            </Text>
            <Text style={[styles.description]}>
                You can either call Actionsheet Programmatically or use it as a component.
            </Text>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Native Action Sheet (Normal)</Text>
                <ArivaaActionSheet
                    title="This is Title"
                    message="Testing New Message"
                    triggerProps={{
                        text: 'Default Trigger'
                    }}
                    options={data}
                    style={[styles.trigger]}
                    native={true}
                />
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Arivaa Action Sheet (Normal)</Text>
                <ArivaaActionSheet
                    title="This is Title"
                    message="Testing New Message"
                    triggerProps={{
                        text: 'Default Trigger'
                    }}
                    options={data}
                    style={[styles.trigger]}
                    native={false}
                />
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Native Action Sheet (Share)</Text>
                <ArivaaActionSheet
                    title="This is Title"
                    message="Testing New Message"
                    url="http://www.google.com"
                    triggerProps={{
                        text: 'Default Trigger'
                    }}
                    type="share"
                    onSuccess={() => {
                        Toast.success('Share Success')
                    }}
                    style={[styles.trigger]}
                    native={true}
                />
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Custom Action Sheet (Share)</Text>
                <ArivaaActionSheet
                    title="This is Title"
                    message="Testing New Message"
                    url="http://www.google.com"
                    triggerProps={{
                        text: 'Default Trigger'
                    }}
                    type="share"
                    options={data}
                    onSuccess={() => {
                        Toast.success('Share Success')
                    }}
                    style={[styles.trigger]}
                    native={false}
                />
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Custom Trigger using "trigger" option</Text>
                <ArivaaActionSheet
                    title="This is Title"
                    message="Testing New Message"
                    trigger={
                        <View style={[styles.trigger, styles.custom]}>
                            <Icon type="feather" style={[styles.icon]} name='navigation-2'/>
                        </View>
                    }
                    options={data}
                    native={true}
                />
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Default Trigger</Text>
                <ArivaaActionSheet
                    title="This is Title"
                    message="Testing New Message"
                    triggerProps={{
                        text: 'Default Trigger'
                    }}
                    options={data}
                    style={[styles.trigger]}
                />
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Share Trigger</Text>
                <ArivaaActionSheet
                    title="This is Title"
                    message="Testing New Message"
                    triggerProps={{
                        text: 'Default Trigger'
                    }}
                    type="share"
                    options={data}
                    style={[styles.trigger]}
                />
            </View>
            <View style={[styles.section]}>

                <Text style={[styles.title, styles.margin]}>Custom Button Trigger</Text>
                <Text style={[styles.message]}>( If you intend to use button as custom trigger, Use triggerProps else
                    pass a custom trigger using trigger option )</Text>
                <ArivaaActionSheet
                    title="This is Title"
                    message="Testing New Message"
                    triggerProps={{
                        type: 'primary',
                        size: 'large',
                        text: 'Custom Trigger',
                        textStyle: [styles.customTriggerText]
                    }}
                    options={data}
                    style={[styles.trigger]}
                />
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title, styles.margin]}>Usage as a Component</Text>
                <Text style={[styles.message]}>(Useful in case scenarios like inside React Native Modal where
                    action sheet can not be put above modal)</Text>
                <ModalTrigger
                    content={(
                    <View style = {{
                        padding: 10
                    }}>
                        <Button
                            type="bordered"
                            text="Open Action Sheet Via Component"
                            onPress={() => {
                                 this.actionsheet.showShareActionSheetWithOptions({
                                     title: 'This is Title',
                                     message: 'Testing New Message',
                                     options: data,
                                     style: [styles.trigger],
                                     styles : {
                                         itemsContainer : {
                                             paddingBottom : 20
                                         }
                                     },
                                     native: false
                                 })
                             }}
                        />
                    </View>
                )}
                   modalProps = {{
                       secondaryContent : <ArivaaActionSheetComponent ref={(ref) => this.actionsheet = ref}/>
                   }}

                >
                    <Button
                        type="bordered"
                        text="Check Action Sheet in Modal"
                        />
                </ModalTrigger>
            </View>
        </View>
    )
}
module.exports = view
