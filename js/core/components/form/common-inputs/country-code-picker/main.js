import React, {Component} from "react";
import ComponentView from "./view";
import countryData from "country-data";
/**
 * @description Component for country code picker
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
            value: props.value || null
        };
    }

    /**
     * ComponentDidMount Hook
     */
    componentDidMount() {

    }

    /**
     * Component Will Receive props hook
     * Set updated value in state
     */
    componentWillReceiveProps(nextProps) {
        if (JSON.stringify(nextProps.value) != JSON.stringify(this.state.value)) {
            this.setState({
                value: nextProps.value
            })
        }
    }

    /**
     * on Change to be implemented
     * for it to work with rc-form
     */
    onChange(value) {
        this.setState({value});
        const {onChange} = this.props;
        if (onChange instanceof Function) {
            onChange(value);
        }
    }

    /**
     * Get Country Code Map for country picker
     */
    getCountryCodeMap() {
        const callingCountries = countryData.callingCountries.all;
        const {labelFormatter,valueFormatter} = this.props;
        let valuesArray = [];
        let output = [];
        Object.values(callingCountries).map((data) => {
            let label,value;
            if(labelFormatter instanceof Function){
                label = labelFormatter(data);
            } else {
                label = data.countryCallingCodes[0] + " - " + data.name;
            }
            if(valueFormatter instanceof Function){
                value = valueFormatter(data);
            } else {
                value = data.countryCallingCodes[0];
            }
            if(typeof value!='undefined' && valuesArray.indexOf(value)==-1){
                valuesArray.push(value);
                output.push({
                    value,
                    label
                })
            }
        });
        return output;
    }

    /**
     * Render Method
     * @returns {*}
     */
    render() {
        return (ComponentView.bind(this))();
    }
}

Main.displayName = "Country-Code-Picker-Component";
