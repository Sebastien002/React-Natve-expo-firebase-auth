import React, {Component} from 'react'
import ComponentView from './view'

/**
 * @description Slider Component Demo
 * @type Component
 * @author Inderdeep
 */

export default class Main extends Component {

    /**
     * Container
     * @param props
     */
    constructor(props) {
        super(props)
    }

    /**
     * ComponentDidMount Hook
     */
    componentDidMount() {

    }

    onChange(value) {
        console.log(value)
    }

    /**
     * Render Method
     * @returns {*}
     */
    render() {
        return (ComponentView.bind(this))()
    }
}

Main.displayName = 'Slider-Component-Demo'
