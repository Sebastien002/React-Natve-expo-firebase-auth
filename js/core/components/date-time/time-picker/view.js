import React from 'react'
import styles from './styles'
import { View, Platform } from 'react-native'
import { DatePickerView } from 'antd-mobile-rn'
import { ModalTrigger } from '../../modal'
import Button from '../../button'

var view = function () {
    const {tempValue} = this.state
    const {lang} = this.props
    let propStyles = this.props.styles || {}
    const {selectTimeButtonProps, timePickerModalProps, use12Hours, doneButtonProps} = this.props
   // console.log("Re-Rendered",tempValue)
    return (
        <ModalTrigger
            ref={(ref) => {this.modalTriggerRef = ref}}
            content={(
                <View style={[styles.view, propStyles.timePickerContainer]}>
                    <DatePickerView
                        mode="time"
                        value={tempValue}
                        onChange={this.onValueChange.bind(this)}
                        itemStyle={[styles.itemStyle, propStyles.timePickerItem]}
                        use12Hours={use12Hours == false ? false : true}
                    />
                    <Button
                        style={[styles.androidStyle, propStyles.timePickerDoneButton]}
                        type="bordered"
                        {...doneButtonProps}
                        onClick={this.onChange.bind(this)}
                        text={lang['time.done.title']}/>
                </View>
            )}
            modalProps={{
                scrollViewProps: {scrollEnabled: false},
                style: [styles.modalContent],
                ...timePickerModalProps,
                backdrop : true,
                styles: {
                    modalContent: {
                        paddingTop: Platform.OS === 'ios' ? 20 : 70,
                    },
                    close: {
                        top: 0
                    }
                }
            }}
        >
            <Button
                style={propStyles.timePickerSelect}
                type="bordered" {...selectTimeButtonProps}
                text={this.getTimeString() + ' | ' + lang['time.select.title']}/>
        </ModalTrigger>
    )
}
module.exports = view
