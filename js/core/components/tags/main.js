import React, {Component} from "react";
import ComponentView from "./view";
import PropTypes from "prop-types";
const supportedTypes = ['add', 'select', 'add-select'];
/**
 * @description Tag Component
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
        let {value} = this.props
        if (typeof(value) == 'string') {
            value = [value]
        }
        this.state = {
            selected: value || [],
            newTag: ''
        }
    }

    /**
     * ComponentDidMount Hook
     */
    componentDidMount() {
    }

    /**
     * Add New tag
     */
    addNewTag() {
        const {data, multiple} = this.props
        const {newTag, selected} = this.state
        if (newTag == "") {
            return;
        }
        data.push({
            label: newTag,
            value: newTag
        });
        let newSelected;
        if (this.getType() != "add") {
            newSelected = multiple ? [newTag].concat(selected) : [newTag];
        } else {
            newSelected = [newTag].concat(selected)
        }
        this.setState({newTag: '', selected: newSelected})
        this.executeOnChange(newSelected)

    }

    /**
     * On change in add new
     * @param valuefeaf
     */
    onAddNew(value) {
        this.setState({newTag: value})
    }

    /**
     * on click of item
     */

    onChange(selectedValue) {
        let selected = [...this.state.selected]
        const {multiple, readOnly} = this.props;
        if (readOnly) {
            return;
        }
        if (multiple) {
            if (selected.indexOf(selectedValue) == -1) {
                selected.push(selectedValue)
            } else {
                selected.splice(selected.indexOf(selectedValue), 1)
            }
        } else {
            selected = [selectedValue]
        }
        this.setState({selected})
        this.executeOnChange(selected)
    }

    /**
     * Execute on change callback
     * @param selected
     */
    executeOnChange(selected) {
        const {onChange} = this.props;
        if (onChange instanceof Function) {
            onChange(selected)
        }
    }

    /**
     * Get type of select
     */
    getType() {
        let {type} = this.props;
        type = (type || "").toLowerCase();
        if (supportedTypes.indexOf(type) == -1) {
            type = 'select'
        }
        return type
    }

    /**
     * Render Method
     * @returns {*}
     */
    render() {
        return (ComponentView.bind(this))()
    }
}

Main.displayName = 'Tags-Component'

Main.propTypes = {
    data: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]),
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]),
    onChange: PropTypes.func,
    multiple: PropTypes.bool,
    mode: PropTypes.oneOf(['select', 'add', 'add-select']),
    readOnly: PropTypes.bool,
    closable: PropTypes.bool
}