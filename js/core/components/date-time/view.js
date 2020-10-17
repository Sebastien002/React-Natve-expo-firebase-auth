import React from 'react'
import styles from './styles'
import { ScrollView, TouchableHighlight, View } from 'react-native'
import DateTimePicker from './date-time-picker'
import { Modal, ModalTrigger } from '../modal'
import ArivaaButton from '../button'
import { Colors } from 'arivaa-basic/styles'
import defaultLang from './lang.json'
import Toast from '../toast'
const supportedModes = ['inline', 'modal']
var view = function () {
    const {visible, value} = this.state
    let {displayMode, theme, use12Hours, timePickerProps, datePickerProps, getDateTimeString, lang, displayFormat, type, triggerButtonProps, doneButtonProps, buttonText, children, doneText, modalTrigger} = this.props
    displayMode = (displayMode || '').toLowerCase()
    if (supportedModes.indexOf(displayMode) == -1) {
        displayMode = 'modal'
        //console.warn('displayMode is not supported,Taking it as modal');
    }

    if (type == 'time') {
        displayMode = 'inline'
    }
    theme = theme || {}
    lang = {...defaultLang, ...lang}
    let propStyles = this.props.styles || {}
    const dateTimeElement = (
        <DateTimePicker
            lang={lang}
            timePickerProps={{...timePickerProps, use12Hours}}
            datePickerProps={datePickerProps}
            getType={this.getType.bind(this)}
            getDateTimeString={this.getDateTimeString.bind(this)}
            displayFormat={displayFormat}
            displayMode={displayMode}
            type={type}
            value={value}
            theme={theme}
            primaryColor={theme.primaryColor || Colors.primaryColor}
            secondaryColor={theme.secondaryColor || Colors.brandGrey}
            onChange={this.onChange.bind(this)}
            styles={propStyles}
        />
    );
    switch (displayMode) {
        case 'inline':
            return dateTimeElement;
        case 'modal':
            let modalProps = {
                style: [styles.modalContent],
                onShow: this.onShowModal.bind(this),
                onHide: this.onHideModal.bind(this)

            }
            let commonDoneButtonProps = {
                type: 'bordered',
                style: [styles.button, doneButtonProps ? doneButtonProps.style : null]
            }
            return (
                <View>
                    {
                        (modalTrigger == false) ? (
                            <Modal visible={visible}
                                   coverScreen={true}
                                   {...modalProps}
                                   useScrollView = {false}
                            >
                                <ScrollView>
                                    {dateTimeElement}
                                    <ArivaaButton {...doneButtonProps}
                                                  {...commonDoneButtonProps}
                                                  onClick={this.onHideModal.bind(this)}
                                                  text={doneText || lang['done.title']}/>
                                </ScrollView>
                            </Modal>
                        ) : (
                            <ModalTrigger
                                ref={(ref) => {
                                    this.modalTriggerRef = ref
                                }}
                                content={(
                                    <ScrollView>
                                        <View>
                                            {dateTimeElement}
                                            <ArivaaButton {...doneButtonProps}
                                                          {...commonDoneButtonProps}
                                                          onClick={this.onDoneClick.bind(this)}
                                                          text={doneText || lang['done.title']}
                                            />
                                        </View>
                                    </ScrollView>
                                )}
                                modalProps={{
                                    ...modalProps,
                                    useScrollView:false
                                }}>
                                {
                                    children ? (
                                        <TouchableHighlight underlayColor={'transparent'}>
                                            {children}
                                        </TouchableHighlight>
                                    ) : (
                                        <ArivaaButton
                                            type="bordered"
                                            {...triggerButtonProps}
                                            text={getDateTimeString ? getDateTimeString(value) : (this.getDateTimeString() + ' | ' + (buttonText || lang['date.change']))}/>
                                    )
                                }
                            </ModalTrigger>
                        )
                    }
                </View>
            )
    }
}
module.exports = view
