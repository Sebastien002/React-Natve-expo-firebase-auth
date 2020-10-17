import React from 'react'
import { Bubbles, Bars, DoubleBounce, Pulse } from 'react-native-loader'
import Progress from '../progress'
import { getModifiedProps } from '../util'

const supportedLoaderTypes = ['bubbles', 'bar', 'bars', 'pulse', 'bounce', 'circle', 'radar']
/**
 * View
 * @returns {XML}
 */
var view = function () {
    let {type, size} = this.props
    type = (type || '').toLowerCase()
    if (supportedLoaderTypes.indexOf(type) == -1) {
        type = 'bubbles'
    }
    const defaultProps = {}
    const componentProps = getModifiedProps(this.props, [])
    const finalProps = {
        ...defaultProps,
        ...componentProps
    }
    switch (type) {
        case 'bubbles':
            return (
                <Bubbles
                    {
                        ...finalProps
                    }
                />
            )
        case 'bars':
            return (
                <Bars
                    {...finalProps}
                >
                </Bars>
            )
        case 'pulse':
            return (
                <Pulse
                    {...finalProps}
                >
                </Pulse>
            )
        case 'bounce':
            return (
                <DoubleBounce
                    {...finalProps}
                >
                </DoubleBounce>
            )
        case 'circle':
            return (
                <Progress
                    {...finalProps}
                    type="circle"
                    indeterminate={true}
                    unfilledColor={'rgba(0,0,0,0)'}
                    progress={undefined}
                >
                </Progress>
            )
        case 'radar':
            return (
                <Progress
                    {...finalProps}
                    type="pie"
                    indeterminate={true}
                    unfilledColor={'rgba(0,0,0,0)'}
                    progress={undefined}
                >
                </Progress>
            )
        case 'bar':
            return (
                <Progress
                    {...finalProps}
                    type="bar"
                    indeterminate={true}
                    width={size || 50}
                    progress={undefined}
                />
            )
    }

}
module.exports = view
