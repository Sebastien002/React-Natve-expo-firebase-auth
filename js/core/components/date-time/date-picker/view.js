import React from 'react'
import styles from './styles'
import { View } from 'react-native'
import { Calendar } from 'react-native-calendars'
import { Colors } from 'arivaa-basic/styles'
import { getModifiedProps } from '../../util'

var view = function () {
    const {value} = this.state
    const {theme} = this.props
    let propStyles = this.props.styles || {}
    return (
        <View style={[styles.view, propStyles.datePickerContainer]}>
            <Calendar
                {...getModifiedProps(this.props, ['theme', 'lang', 'style', 'onChange', 'children'])}
                markingType={'custom'}
                current={value}
                markedDates={this.getValue(value)}
                onDayPress={this.onChange.bind(this)}
                theme={{
                    backgroundColor: '#ffffff',
                    calendarBackground: '#ffffff',
                    textSectionTitleColor: Colors.brandGrey,
                    selectedDayBackgroundColor: Colors.primaryColor,
                    selectedDayTextColor: '#FFFFFF',
                    todayTextColor: Colors.primaryColor,
                    dayTextColor: '#2d4150',
                    textDisabledColor: '#d9e1e8',
                    dotColor: '#00adf5',
                    selectedDotColor: '#ffffff',
                    arrowColor: Colors.primaryColor,
                    monthTextColor: Colors.brandGrey,
                    textMonthFontWeight: 'bold',
                    textDayFontSize: 14,
                    textMonthFontSize: 16,
                    textDayHeaderFontSize: 14,
                    ...theme

                }}
            />
        </View>
    )
}
module.exports = view
