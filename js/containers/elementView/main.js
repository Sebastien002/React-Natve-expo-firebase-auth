import React, {Component} from "react";
import ComponentView from "./view";

/**
 * @description Sample Component
 * @type Component
 * @author Inderdeep
 */

const data = [
    {
        key: '1',
        title: 'Title 1',
        content: 'Content 1'
    }, {
        key: '2',
        title: 'Title 2',
        content: 'Content 2'
    }, {
        key: '3',
        title: 'Title 3',
        content: 'Content 3'
    },
]

export default class Main extends Component {

    /**
     * Container
     * @param props
     */
    constructor(props) {
        super(props)
        this.state = {
            data: data,
            scrollEnabled : true
        }
    }
    setScroll(scrollEnabled){
        this.setState({
            scrollEnabled
        })
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

Main.displayName = 'UI-Elements'
