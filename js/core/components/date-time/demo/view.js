import React from 'react'
import styles from './styles'
import { View, Text } from 'react-native'
import ArivaaButton from '../../button'
import ArivaaDateTime from '../main'

var view = function () {

    const {visible} = this.state
    const onChange = (value) => {
        console.log('Date Value ', value)
    }

    const {value} = this.state
    return (
        <View style={[styles.container]}>
            <Text style={[styles.description]}>
                The Date Time component allow users to choose a date from the calendar and time from picker.
            </Text>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Modal Date Time Picker</Text>
                <ArivaaDateTime
                    type={'datetime'}
                />
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Modal Date Picker</Text>
                <ArivaaDateTime
                    type={'date'}
                />
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Time Picker Hour Format</Text>
                <ArivaaDateTime
                    type={'time'}
                />
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Inline Date Time Picker</Text>
                <ArivaaDateTime
                    displayMode="inline"
                    type={'datetime'}
                />
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Inline Date Picker</Text>
                <ArivaaDateTime
                    displayMode="inline"
                    type={'date'}
                />
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title, styles.margin]}>Managed Modal Date Time Picker</Text>
                <Text style={[styles.message]}>
                    ( In this mode, you can manage how and when to make the date picker visible as
                    you would with a normal modal. )
                </Text>
                <ArivaaDateTime
                    modalTrigger={false}
                    visible={visible}
                    value={value}
                    type={'datetime'}/>
                <ArivaaButton type={'bordered'} onClick={this.handleClick.bind(this)}
                              text={'Open Managed Date Time Picker'}/>
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Date Time Picker With 24 Hours format</Text>
                <ArivaaDateTime
                    displayMode="inline"
                    type={'datetime'}
                    use12Hours={false}
                />
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}> Time Picker With 24 Hours format</Text>
                <ArivaaDateTime
                    type={'time'}
                    use12Hours={false}
                />
            </View>
        </View>
    )
}
module.exports = view
