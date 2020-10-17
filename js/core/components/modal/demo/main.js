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
        super(props);
        this.state = {
            visible: false
        }
    }

    /**
     * ComponentDidMount Hook
     */
    componentDidMount() {

    }

    onModalShow() {
        this.setState({visible: true});
    }

    /**
     * Render Method
     * @returns {*}
     */
    render() {
        return (ComponentView.bind(this))()
    }
}

Main.displayName = 'Modal-Component-Component'
