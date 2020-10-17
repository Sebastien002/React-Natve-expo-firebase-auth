import React, {Component} from 'react'
import ComponentView from './view'
import PropTypes from 'prop-types'

/**
 * @description Modal Trigger Component
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
            visible: false
        }
    }

    /**
     * ComponentDidMount Hook
     */
    componentDidMount() {

    }
    enableScroll(){
        this.modalRef.enableScroll()
    }
    disableScroll(){
        this.modalRef.disableScroll()
    }
    /**
     * On trigger press
     */
    onPress(onPress) {
        this.setState({
            visible: true
        }, () => {
            if (onPress && onPress instanceof Function) {
                onPress()
            }
        })
    }

    /**
     * Hide Modal
     */
    hideModal() {
        const {onHide} = (this.props.modalProps || {});
        this.setState({
            visible: false
        }, () => {
            if (onHide && onHide instanceof Function) {
                onHide();
            }
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

Main.displayName = 'Modal-Trigger-Component'

Main.propTypes = {
    visible: PropTypes.bool
}