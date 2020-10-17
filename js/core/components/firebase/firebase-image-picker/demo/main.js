import React, {Component} from 'react'
import ComponentView from './view'

/**
 * @description Firebase-Image-Picker-Demo
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
            url : null
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

Main.displayName = 'Firebase-Image-Picker-Demo'
