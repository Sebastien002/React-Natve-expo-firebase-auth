import React, {Component} from "react";
import {connect} from "react-redux";
import ComponentView from "./view";
import {ActionNames, createAction} from "app-redux/actions";
import preProcess from "../preprocess";
import {Toast} from "arivaa-basic/components";
import Spinner from "../../components/spinner";

class Main extends Component {

    constructor(props) {
        super(props);
        this.setValidations();
    }

    /**
     * Set Validations
     */
    setValidations() {
        const {translate} = this.props;
        this.validations = {
            "password": {
                rules: [
                    {required: true, message: translate("common.password.error.required")},
                    {min: 6, message: translate("common.passwordLength.error.required")}
                ],
                initialValue: "123456"
            },
            "cpassword": {
                rules: [
                    {required: true, message: translate("common.passwordConfirm.error.required")}
                ],
                initialValue: "123456"
            }
        }
    }

    /**
     * On Submit of form
     * @param errors
     * @param values
     */
    onSubmit(values) {

        const {resetPassword, navigation, translate} = this.props;
        if (values.password != values.cpassword) {
            Toast.fail(translate("resetPassword.error.password.match"));
            return;
        }
        Spinner.start();
        resetPassword({
            ...values,
            ...navigation.state.params
        }).then((action) => {
            Spinner.stop();
            if (action.error) {
                //console.log(action)
                Toast.fail(translate("resetPassword.error.server"));
            } else {
                Toast.success(translate("resetPassword.success"));
                navigation.navigate("login")
            }
        })
    }


    render() {
        return (ComponentView.bind(this))();
    }
}

/**
 * Bind Redux Actions
 * @param dispatch
 * @returns {{Object}}
 */
const bindAction = (dispatch) => {
    return {
        /**
         * Reset Password Action Creator
         * @param data
         */
        resetPassword: (data) => {
            return dispatch(createAction(ActionNames.RESET_PASSWORD, data))
        }
    }
};
/**
 * Bind State to props
 * @param dispatch
 * @returns {{Object}}
 */
const mapStateToProps = (state) => {
    const {auth} = state;
    return {
        auth
    };
};
Main.displayName = "ResetPassword";
export default preProcess(Main, {
    connect: [mapStateToProps, bindAction],
    localize: true
});
