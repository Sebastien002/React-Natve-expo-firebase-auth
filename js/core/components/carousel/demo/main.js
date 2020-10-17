import React, {Component} from 'react'
import ComponentView from './view'

/**
 * @description Carousel Component Demo
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
            selectedIndex: 2
        }
    }

    /**
     * ComponentDidMount Hook
     */
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                selectedIndex: 3
            })
        }, 3000)
    }

    /**
     * Render Method
     * @returns {*}
     */
    render() {
        return (ComponentView.bind(this))()
    }
}

Main.displayName = 'Carousel-Component-Demo';
