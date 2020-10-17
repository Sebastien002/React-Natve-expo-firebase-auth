import React, {Component} from "react";
import ComponentView from "./view";
import PropTypes from "prop-types";
import moment from "moment";
const supportedTypes = ['date', 'time', 'datetime'];
import Toast from '../toast'
/**
 * @description Sample Component
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
            visible: props.visible || false,
            value: props.value || (new Date())
        }
    }

    /**
     * ComponentDidMount Hook
     */
    componentDidMount() {

    }

    /**
     * on Modal Show
     */

    onShowModal() {
       // console.log("On Show Called")
        const {onShow} = this.props
        if (onShow instanceof Function) {
            onShow()
        }

    }

    /**
     * On Change
     * @param value
     */
    onChange(value) {
        const {onChange} = this.props;
        this.setState({
            value
        });
        if (onChange instanceof Function) {
            onChange(value);
        }
    }

    /**
     * on Modal Close
     */

    onHideModal() {
        this.setState({visible: false})
        const {onHide} = this.props
        if (onHide instanceof Function) {
            onHide()
        }
    }

    /**
     * componentWillReceiveProps Hook
     */

    componentWillReceiveProps(newProps) {
        const {visible, value} = this.state
        if (visible != newProps.visible) {
            this.setState({
                visible: newProps.visible
            })
        }
        if (newProps.value && newProps.value != value) {
            this.setState({value: newProps.value});
        }
    }

    /**
     * Get time string
     */
    getDateTimeString() {
        const {value} = this.state;
        const type = this.getType();
        let {use12Hours} = this.props;
        use12Hours = use12Hours ;
        let defaultFormat = null;
        if (type == "time") {
            defaultFormat = "LT";
        } else if (type == "date") {
            defaultFormat = "LL";
        } else {
            if(use12Hours == false){
                defaultFormat = "MMMM DD, YYYY HH:mm";
            } else {
                defaultFormat = "LLL";
            }
        }
        return moment(value).format(this.props.displayFormat || defaultFormat);
    }

    /**
     * On Done Click
     */
    onDoneClick() {
        this.modalTriggerRef && this.modalTriggerRef.hideModal();
    }

    /**
     * Get Type
     */
    getType() {
        let {type} = this.props;
        type = (type || '').toLowerCase();
        if (supportedTypes.indexOf(type) == -1) {
            type = 'datetime';
            console.warn('type is not supported,Taking it as datetime')
        }
        return type;
    }

    /**
     * Render Method
     * @returns {*}
     */
    render() {
        return (ComponentView.bind(this))()
    }
}

Main.displayName = 'Date-Time-Component'

Main.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.instanceOf(Date),
        PropTypes.array
    ]),
    onChange: PropTypes.func,
    onShow: PropTypes.func,
    onHide: PropTypes.func,
    visible: PropTypes.bool
}
