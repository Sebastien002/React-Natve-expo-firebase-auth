import React, {Component} from "react";
import ComponentView from "./view";
import PropTypes from 'prop-types';
/**
 * @description Accordion Component
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
        if (props.defaultActiveKey) {
            this.activeKey = props.defaultActiveKey;
        } else if (props.activeKey) {
            this.activeKey = props.activeKey;
        } else {
            this.activeKey = null;
        }
    }

    /**
     * On Key Change
     * @param key
     */
    onChange(key) {
       // console.log(key);
        const {onShow,onHide, data} = this.props;
        if(key){
            this.activeKey = key;
            if (onShow instanceof Function) {
                onShow(key, data[key]);
            }
        } else {
            if (onHide instanceof Function) {
                onHide(this.activeKey, data[this.activeKey]);
            }
            this.activeKey = null;
        }
    }

    /**
     * Component Will Receive Props
     * @param newProps
     */
    componentWillReceiveProps(newProps) {
        this.activeKey = newProps.activeKey;
    }

    /**
     * Get Active key
     * @returns {string|string[]|*|string}
     */
    getActiveKey() {
        return this.activeKey;
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

Main.displayName = 'Arivaa-Accordion';
Main.propTypes = {
    data: PropTypes.array.isRequired,
    defaultActiveKey : PropTypes.string,
    activeKey : PropTypes.string,
    onShow: PropTypes.func,
    onHide: PropTypes.func,
    styles : PropTypes.object
};
