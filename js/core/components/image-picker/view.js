import React from 'react'
import styles from './styles'
import { Text, TouchableHighlight, View } from 'react-native'
import Thumbnail from '../thumbnail'
import Button from '../button'
import { getImage } from '../util'
import Icon from '../icon'

/**
 * View
 * @returns {XML}
 */
var view = function () {
    const {children, getChildren, thumbnailProps, imageWidth, imageHeight, imageStyle, containerStyle, closable, closeButtonProps, noImageSelectedText} = this.props
    const propStyles = this.props.styles || {}
    const {value, childWidth} = this.state
    let markup
    if (children) {
        let modifiedChildren = React.cloneElement(children, {
            onLayout: (e) => {
                const {width, height} = e.nativeEvent.layout
                this.setState({
                    childWidth: width
                })
            }
        })

        markup = (
            <TouchableHighlight onPress={this.onPress.bind(this)} underlayColor={'transparent'}
                                style={[childWidth ? {width: childWidth} : null, containerStyle, propStyles.container]}>
                {modifiedChildren}
            </TouchableHighlight>
        )
    } else {
        if (getChildren && getChildren instanceof Function) {
            markup = getChildren(this.getExposedConfig())
        } else {
            markup = (
                <View style={propStyles.container}>
                    <View style={[styles.image,{width: imageWidth || 100, height: imageHeight || 100}, propStyles.imagePicker]}>
                        <Thumbnail
                            borderRadius={5}
                            icon={'image'}
                            {...thumbnailProps}
                            source={getImage(value)}
                            style={[
                                imageStyle,
                                {
                                    width: imageWidth || 100,
                                    height: imageHeight || 100
                                },
                                thumbnailProps ? thumbnailProps.style : null,
                                propStyles.thumbnail
                            ]}
                        />
                        <Button type="bordered"
                                onClick={this.onPress.bind(this)}
                                style={[styles.trigger, {
                                    width: imageWidth || 100,
                                    height: imageHeight || 100
                                }, propStyles.trigger]}
                        />
                        {
                            (!(typeof closable != 'undefined' && !closable) && value) ? (
                                <Button type="rounded"
                                        text={<Icon type={'ionicons'} name={'md-close'} style={[styles.icon]}/>}
                                        {...closeButtonProps}
                                        style={[styles.removeBtn, closeButtonProps ? closeButtonProps.style : null, propStyles.closeButton]}
                                        onClick={this.clearFile.bind(this)}
                                />
                            ) : null
                        }
                    </View>
                    {
                        !value ? (
                            <View style={propStyles.emptyTextContainer}>
                                <Text
                                    style={[styles.empty, propStyles.emptyText]}>{noImageSelectedText || '( No Image Selected )'}</Text>
                            </View>
                        ) : null
                    }

                </View>
            )
        }
    }
    return (
        <View style={propStyles.mainContainer}>
            {markup}
        </View>
    )
}
module.exports = view
