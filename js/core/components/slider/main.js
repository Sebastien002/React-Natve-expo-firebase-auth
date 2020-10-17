import React, {Component} from "react";
import ComponentView from "./view";
import {PropTypes} from "prop-types";
const supportedTypes = ['single', 'range'];
/**
 * @description Slider Component
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
        this.config = {
            min: 0,
            max: 100,
            step: 1,
            sliderLength :300
        };
        this.state = {
            value: this.getFinalValue()
        };
    }

    /**
     * ComponentDidMount Hook
     */
    componentDidMount() {

    }

    /**
     * On Change
     * @param value
     */
    onChange(value) {
        this.setState({value});
        const {onChange} = this.props;
        if (onChange instanceof Function) {
            onChange(value);
        }
    }

    /**
     * Get Slider Type
     */
    getType() {
        let {type} = this.props;
        type = (type || "").toLowerCase();
        if (supportedTypes.indexOf(type) == -1) {
            type = "single"
        }
        return type;
    }

    /**
     * get Initial Value
     */
    getFinalValue() {
        const {value, min, max} = this.props;
        switch (this.getType()) {
            case 'single' :
                return value || (this.getMin());
            case 'range' :
                if (value instanceof Array) {
                    return value || [this.getMin(), this.getMax()];
                } else {
                    return [this.getMin(), this.getMax()];
                }
        }
    }

    /**
     * Get Min
     */
    getMin() {
        const {min} = this.props;
        if (typeof min != 'undefined' && typeof min != 'number') {
            console.warn("Min should be a number, Taking default as "+this.config.min);
            return this.config.min;
        } else {
            return min || this.config.min;
        }
    }

    /**
     * Get Min
     */
    getMax() {
        const {max} = this.props;
        if (typeof max != 'undefined' && typeof max != 'number') {
            console.warn("Max should be a number, Taking default as "+this.config.max);
            return this.config.max;
        } else {
            return max || this.config.max;
        }
    }

    /**
     * Get Min
     */
    getStep() {
        const {step} = this.props;
        if (typeof step != 'undefined' && typeof step != 'number') {
            console.warn("Step should be a number, Taking default as "+this.config.max);
            return this.config.step;
        } else {
            return step || this.config.step;
        }
    }

    /**
     * componentWillReceiveProps Hook
     * @param nextProps
     */
    componentWillReceiveProps(nextProps) {
        const {value} = this.state;
        switch (this.getType()) {
            case 'single' :
                if (nextProps.value != value) {
                    this.setState({value: nextProps.value || this.getMin()})
                }
                break;
            case 'range':
                if (JSON.stringify(nextProps.value) != JSON.stringify(value)) {
                    this.setState({value: nextProps.value || [this.getMin(),this.getMax()]})
                }
                break;
        }

    }

    /**
     * Format Value
     * @returns {*}
     */
    getValue() {
        const {value} = this.state;
        const {formatter} = this.props;
        if (formatter instanceof Function) {
            return formatter(value);
        } else {
            switch(this.getType()){
                case 'single':
                    return String(value);
                case 'range':
                    if(value){
                        return value[0]+","+value[1]
                    } else {
                        return ""
                    }
            }
        }
    }
    onSlidingStart(){
        const {onSlidingStart} = this.props;
        if(onSlidingStart instanceof Function){
            onSlidingStart.apply(this,arguments)
        }
    }
    onSlidingComplete(){
        const {onSlidingComplete} = this.props;
        if(onSlidingComplete instanceof Function){
            onSlidingComplete.apply(this,arguments)
        }
    }
    /**
     * Render Method
     * @returns {*}
     */
    render() {
        return (ComponentView.bind(this))()
    }
}

Main.displayName = 'Slider-Component';

Main.propTypes = {
    onChange: PropTypes.func
};