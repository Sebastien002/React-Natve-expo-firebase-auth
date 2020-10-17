import React, {Component} from 'react'
import ComponentView from './view'

/**
 * @description Sample Component
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
        this.state = {
            value: ''
        }
    }

    /**
     * ComponentDidMount Hook
     */
    componentDidMount() {
    }

    /**
     * Render Method
     * @returns {*}
     */
    render() {
        return (ComponentView.bind(this))()
    }
}

Main.displayName = 'Select-Component-Demo'
