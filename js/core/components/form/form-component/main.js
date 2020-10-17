import React, {Component} from "react";
import ComponentView from "./view";
import {getFirstError, integerValidator, numberValidator, showMessage} from "../validation";
import {createForm} from "rc-form";
/**
 * @description Form Component
 * @type Component
 * @author Inderdeep
 */
class Main extends Component {

    /**
     * Container
     * @param props
     */
    constructor(props) {
        super(props);
        this.elementRefs = [];
    }

    /**
     * ComponentDidMount Hook
     */
    componentDidMount() {
    }

    /**
     * Modify Rules for async validator bugs
     * https://github.com/yiminghe/async-validator/issues/57
     */
    modifyRules(rules) {
        return (rules || []).map((rule) => {
            let newRule = {
                ...rule
            };
            switch ((rule.type || '').toLowerCase()) {
                case 'number':
                    delete newRule.type;
                    return {
                        validator: numberValidator,
                        ...newRule
                    };
                case 'integer':
                    delete newRule.type;
                    return {
                        validator: integerValidator,
                        ...newRule
                    };

                default :
                    return rule;
            }
        })
    }

    /**
     * On Submit of form
     */
    onSubmit() {
        const {onSubmit, onError,toast} = this.props;
        const {validateFields} = this.props.form;
        validateFields((errors, values) => {
            if (errors) {
                showMessage(toast || this.toast,getFirstError(errors));
                if (onError) {
                    onError(errors);
                }
                return;
            }
            if (onSubmit) {
                onSubmit(values);
            }
        });
    }


    /**
     * Returns all the properties and functions
     * exposed to outside components
     */
    getExposedConfig() {
        const {form} = this.props.form;
        return {
            form
        }
    }

    /**
     * Render Method
     * @returns {*}
     */
    render() {
        return (ComponentView.bind(this))();
    }
}

Main.displayName = "Form";
export default createForm()(Main);
