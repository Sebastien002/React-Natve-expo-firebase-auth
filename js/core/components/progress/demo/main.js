import React, {Component} from 'react'
import ComponentView from './view'

/**
 * @description Progress Demo Component
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
            progress : 0,
            indeterminate: true
        }
    }

    /**
     * ComponentDidMount Hook
     */
    componentDidMount() {
        this.animate();
    }

    /**
     * To Simulate animation
     */
    animate() {
        setTimeout(() => {
            setInterval(() => {
                let progress = this.state.progress;
                progress += Math.random() / 5;
                if (progress > 1) {
                    progress = 1;
                }
                this.setState({ progress });
            }, 500);
        }, 500);
    }

    /**
     * Render Method
     * @returns {*}
     */
    render() {
        return (ComponentView.bind(this))()
    }
}

Main.displayName = 'Progress-Component-Demo'
