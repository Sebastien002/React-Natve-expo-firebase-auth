import React from 'react'
import styles, { tagStyles } from './styles'
import Button from '../button'
import { TextInput, TouchableHighlight, View } from 'react-native'
import { Tag } from 'antd-mobile-rn'
import TagStyles from 'antd-mobile-rn/es/tag/style/index.native'

/**
 * For Customizing the tag styles used by antd design
 * @type {{}}
 */
const modifiedTagStyles = {
    ...TagStyles,
    ...tagStyles
}
var view = function () {
    let {data, closable, readOnly, tagStyle, tagInputStyle, addButton, extraTagProps, extraTagInputProps, tagWrapperStyle} = this.props
    let type = this.getType()
    const {selected, newTag} = this.state
    data = data || []
    if (typeof(data) == 'string') {
        data = [{label: data, value: data}]
    }
    return (
        <View>
            <View style={styles.container}>
                {
                    (type != 'add') ? (
                        data.map((item, index) => {
                            /**
                             * Support simple strings
                             */
                            if (typeof item == 'string') {
                                item = {
                                    label: item,
                                    value: item
                                }
                            }
                            /**
                             * For Jasjot -
                             * Since styles here are for readonly
                             * this should appear like a normal tag
                             */
                            return readOnly ? (
                                <Tag
                                    {...extraTagProps}
                                    key={index}
                                    disabled={true}
                                    styles={{
                                        disabledText: modifiedTagStyles.activeText,
                                        disabledWrap: modifiedTagStyles.activeWrap
                                    }}
                                >
                                    {item.label}
                                </Tag>
                            ) : (
                                <Tag
                                    {...extraTagProps}
                                    key={index}
                                    disabled={item.disabled}
                                    selected={(selected.indexOf(item.value)) != -1}
                                    onChange={this.onChange.bind(this, item.value)}
                                    closable={closable}
                                    styles={modifiedTagStyles}
                                    style={[styles.tag, tagStyle]}
                                >
                                    {item.label}
                                </Tag>
                            )
                        })
                    ) : (
                        selected.map((item, index) => {
                            /**
                             * For Jasjot -
                             * Since styles here are for readonly
                             * this should appear like a normal tag
                             */
                            //In case of add label and value will be same
                            return (
                                <Tag
                                    {...extraTagProps}
                                    key={index}
                                    disabled={true}
                                    styles={{
                                        disabledText: modifiedTagStyles.activeText,
                                        disabledWrap: modifiedTagStyles.activeWrap
                                    }}
                                >
                                    {item}
                                </Tag>
                            )
                        })
                    )
                }
            </View>
            <View>
                {
                    (type != 'select') ? (
                            <View style={[styles.addNew]}>
                                <TextInput
                                    {...extraTagInputProps}
                                    style={[styles.input, tagInputStyle]}
                                    value={newTag}
                                    underlineColorAndroid={'transparent'}
                                    onChangeText={this.onAddNew.bind(this)}
                                />
                                {
                                    addButton ? (
                                        <TouchableHighlight underlayColor={'transparent'}
                                                            onPress={this.addNewTag.bind(this)}>
                                            {addButton}
                                        </TouchableHighlight>
                                    ) : (
                                        <Button
                                            type="bordered"
                                            onClick={this.addNewTag.bind(this)}
                                            style={[styles.addBtn]}
                                            size="small"
                                            text={'Add'}
                                        />
                                    )
                                }
                            </View>
                        )
                        : null
                }
            </View>
        </View>
    )
}
module.exports = view
