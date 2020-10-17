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
        var d = new Date()
        this.state = {
            value: d,
            visible: false
        }
    }

    /**
     * componentWillReceiveProps Method
     * @returns {*}
     */

    onShow() {
    }

    onHide() {
    }

    /**
     * on Click
     */

    handleClick() {
        this.setState({visible: true})
    }

    /**
     * ComponentDidMount Hook
     */
    componentDidMount() {
        //  setTimeout(() => this.setState({ value: new Date() }), 3000);
    }

    /**
     * Render Method
     * @returns {*}
     */
    render() {
        return ComponentView.bind(this)()
    }
}

Main.displayName = 'Date-Time-Component-Demo'
