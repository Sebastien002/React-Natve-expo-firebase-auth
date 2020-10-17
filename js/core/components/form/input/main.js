import React, {Component} from "react";
import ComponentView from "./view";
import {validate} from "../validation";
/**
 * @description Input Component
 * @type Component
 * @author Inderdeep
 */
export default class Main extends Component {

    /**
     * Constructor
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            value: props.value || ""
        }
    }

    /**
     * ComponentDidMount Hook
     */
    componentDidMount() {

    }

    /**
     * Component Will Receive props
     */
    componentWillReceiveProps(nextProps) {
        if (this.state.value != nextProps.value) {
            this.setState({
                value: nextProps.value
            })
        }
    }

    onChange(value) {
        const {onChange} = this.props;
        this.setState({value});
        if (onChange) {
            onChange(value);
        }
    }

    /**
     * Get Icon
     */
    getIcon() {
        let {icon} = this.props;
        if (typeof icon == 'undefined') {
            switch (this.getType()) {
                case "email":
                    return "envelope";
                case "password" :
                    return "lock";
                case "phone":
                    return "phone";
                case "number":
                    return "lock";
                default :
                    return null;
            }

        }
        return icon;
    }

    /**
     * Get input type
     * @returns {string}
     */
    getType() {
        const {type} = this.props;
        return (type || "").toLowerCase()
    }

    /**
     * Render Method
     * @returns {*}
     */
    render() {
        return (ComponentView.bind(this))();
    }
}

//Neccesary for it to be recognized by form as input
Main.displayType = "form-input";
