import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import * as Progress from 'react-native-progress'
import { getModifiedProps } from '../util'
import { Colors } from 'arivaa-basic/styles'
import {getReactNode} from '../util'
const supportedProgressTypes = ['bar', 'circle', 'pie']
/**
 * View
 * @returns {XML}
 */
var view = function () {
    let {type, size, maxProgress,showsText, children} = this.props;
    let propStyles = this.props.styles || {};
    type = (type || '').toLowerCase();
    if (supportedProgressTypes.indexOf(type) == -1) {
        type = 'circle'
    }
    const defaultProps = {
        size: size || 100,
        color: Colors.primaryColor,
        unfilledColor: '#e6e6e6',
        animated: true,
        indeterminate: typeof this.props.progress == 'undefined' || !this.props.progress
    };
    const componentProps = getModifiedProps(this.props, ['type', 'theme', 'maxProgress','styles'])
    const finalProps = {
        ...defaultProps,
        ...componentProps,
        progress: this.getProgress()
    };

    switch (type) {
        case 'bar':
            if (showsText) {
                return (
                    <View style={[styles.barWithText,propStyles.barContainer]}>
                        <Progress.Bar
                            {
                                ...finalProps
                            }
                            children = {null}
                            showsText = {false}
                        />
                        {
                            showsText?(
                                getReactNode(children || (Math.round(this.getProgress()*100))*100/100+" %",{
                                    style : [styles.barText,propStyles.barText]
                                })
                            ):null
                        }
                    </View>
                )
            } else {

                return (
                    <Progress.Bar
                        {
                            ...finalProps
                        }
                    />
                )
            }
        case 'circle':
            return (
                <Progress.Circle
                    {...finalProps}
                >
                </Progress.Circle>
            );
        case 'pie':
            return (
                <Progress.Pie
                    {...finalProps}
                >
                </Progress.Pie>
            )
    }

}
module.exports = view
