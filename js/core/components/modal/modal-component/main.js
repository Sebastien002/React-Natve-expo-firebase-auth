import React, {Component} from 'react'
import ComponentView from './view'
import PropTypes from 'prop-types'
import {withNavigation} from 'react-navigation';
/**
 * @description Modal  Component
 * We had to use a outside antd design component because we can't customize
 * the design for Antd Design and its a very closed type of component
 * @type Component
 * @author Inderdeep
 */
class Main extends Component {

    /**
     * Container
     * @param props
     */
    constructor(props) {
        super(props)
        this.state = {
            visible: props.visible && true,
            scrollEnabled : true,
        }
    }

    /**
     * ComponentDidMount Hook
     */
    componentDidMount() {

    }

    componentWillReceiveProps(newProps) {
        if (this.state.visible != newProps.visible) {
            this.setState({
                visible: newProps.visible
            })
        }
    }

    /**
     * Hide Modal
     */
    hideModal() {
        const {onHide} = this.props
        this.setState({
            visible: false
        });
        if (onHide instanceof Function) {
            onHide()
        }
    }
    enableScroll(){
        this.setState({
            scrollEnabled : true
        })
    }
    disableScroll(){
        this.setState({
            scrollEnabled : false
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
export default withNavigation(Main);
Main.displayName = 'Modal-Component'

Main.propTypes = {
    visible: PropTypes.bool,
    onHide: PropTypes.func,
    onShow: PropTypes.func,
    hideCloseButton: PropTypes.bool,
    coverScreen: PropTypes.bool,
    contentProps: PropTypes.object,
    modalId: PropTypes.string
}