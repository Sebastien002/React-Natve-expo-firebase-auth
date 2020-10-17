import React from 'react'
import styles from './styles'
import { View, Text } from 'react-native'
import DatePicker from '../date-picker'
import TimePicker from '../time-picker'

var view = function () {
    const {lang} = this.props
    const {value} = this.state
    let propStyles = this.props.styles || {}
    const timePickerProps = {
        ...this.props.timePickerProps,
        value,
        lang,
        styles: propStyles,
        onChange: this.onTimeChange.bind(this)
    }
    const datePickerProps = {
        ...this.props.datePickerProps,
        value,
        lang,
        styles: propStyles,
        onChange: this.onDateChange.bind(this)
    }
    let type = this.getType()
    let pickerView = null

    switch (type) {
        case 'time':
            pickerView = (
                <View style={propStyles.pickerViewContainer}>
                    {/*<Text style={[styles.title,propStyles.title]}>{lang['time.title']}</Text>*/}
                    <TimePicker {...timePickerProps} />
                </View>
            )
            break
        case 'date':
            pickerView = (
                <View style={propStyles.pickerViewContainer}>
                    {/*<Text style={[styles.title,propStyles.title]}>{lang['date.title']}</Text>*/}
                    <DatePicker {...datePickerProps} />
                </View>
            )
            break
        case 'datetime':
            pickerView = (
                <View style={propStyles.dateTimeContainer}>
                    <View style={propStyles.pickerViewContainer}>
                        {/*<Text style={[styles.title,propStyles.title]}>{lang['date.title']}</Text>*/}
                        <DatePicker {...datePickerProps} />
                    </View>
                    <View style={propStyles.pickerViewContainer}>
                        {/*<Text style={[styles.title,propStyles.title]}>{lang['time.title']}</Text>*/}
                        <TimePicker {...timePickerProps} />
                    </View>
                </View>
            )
            break

    }
    return (
        <View style={propStyles.container}>
            {
                type == 'time' ? null : (
                    <View style={[styles.heading, propStyles.heading]}>
                        <Text style={[styles.name, propStyles.valueText]}>
                            {this.getDateTimeString()}
                        </Text>
                    </View>
                )
            }
            {pickerView}
        </View>
    )
}
module.exports = view
