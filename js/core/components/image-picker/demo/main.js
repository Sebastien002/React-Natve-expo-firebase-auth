import React, {Component} from 'react'
import ComponentView from './view'

/**
 * @description Image-Picker-Demo
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
            data: []
        }
    }

    /**
     * ComponentDidMount Hook
     */
    componentDidMount() {

    }

    addImage(image) {
        this.setState({
            data: this.state.data.concat([image])
        })
    }

    removeImage(index) {
        let newArr = [].concat(this.state.data);
        newArr.splice(index, 1)
        this.setState({
            data: newArr
        })
    }

    /**
     * Render Method
     * @returns {*}
     */
    render() {
        return (ComponentView.bind(this))()
    }
}

Main.displayName = 'Image-Picker-Demo'
