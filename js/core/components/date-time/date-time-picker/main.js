import React, {Component} from 'react'
import ComponentView from './view'
import PropTypes from 'prop-types'


/**
 * @description Date Time Picker Component
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
            timeModalVisible: false,
            value: props.value || (new Date())
        }
        this.getDateTimeString = props.getDateTimeString.bind(this);
        this.getType = props.getType.bind(this)
    }

    /**
     * ComponentDidMount Hook
     */
    componentDidMount() {

    }

    /**
     * To open Modal
     */

    openTimeModal() {
        this.setState({timeModalVisible: true});
    }

    /**
     * To close Modal
     */

    closeTimeModal() {
        this.setState({timeModalVisible: false});
    }

    /**
     * componentWillReceiveProps Method
     * @returns {*}
     */

    componentWillReceiveProps(nextProps) {
        const {value} = this.state;
        if (nextProps.value && nextProps.value != value) {
            this.setState({value: nextProps.value});
        }
    }

    /**
     * on change of date
     */


    onDateChange(date) {
        const currentDate = this.state.value;
        let newDate = new Date(currentDate.getTime());
        newDate.setDate(date.getDate());
        newDate.setMonth(date.getMonth());
        newDate.setFullYear(date.getFullYear());
        this.setState({
            value: newDate
        });
        this.executeOnChange(newDate);
    }

    /**
     * on change of time
     */

    onTimeChange(date) {
        let {value} = this.state;

        value.setHours(date.getHours());
        value.setMinutes(date.getMinutes());
        value.setSeconds(date.getSeconds());
        this.executeOnChange(value);
    }

    /**
     * execute method coming from props
     */

    executeOnChange(value) {
        const {onChange} = this.props;
        this.setState({
            value
        });
        if (onChange instanceof Function) {
            onChange(value);
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

Main.displayName = 'Date-Time-Picker-Component';

Main.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.object,
    onShow: PropTypes.func,
    onHide: PropTypes.func,
    displayMode: PropTypes.string,
    type: PropTypes.string
};