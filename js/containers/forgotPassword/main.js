import React, {Component} from "react";
import {connect} from "react-redux";
import ComponentView from "./view";
import {ActionNames, createAction} from "app-redux/actions";
import preProcess from "../preprocess";
import {Toast} from "arivaa-basic/components";
import Spinner from "../../components/spinner";
import firebase from 'firebase';
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
            "email": {
                rules: [
                    {required: true, message: translate("common.email.error.required")},
                    {type: "email", message: translate("common.email.error.invalid")}
                ]
            }
        }
    }

    /**
     * On Submit of form
     * @param errors
     * @param values
     */
    onSubmit(values) {
        Spinner.start();
        const {translate} = this.props;
        firebase.auth().sendPasswordResetEmail(values.email).then(()=>{
            Spinner.stop();
            Toast.success(translate("forgot.submissionSuccess"), 0.5);
        }).catch((e)=>{
            console.log(e)
            Toast.fail(translate("forgot.error"), 0.5);
        });
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
         * Login Action Creator
         * @param drawerId
         */
        forgotPassword: (data) => {
            return dispatch(createAction(ActionNames.FORGOT,data))
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
Main.displayName = "ForgotPassword";
export default preProcess(Main, {
    connect: [mapStateToProps, bindAction],
    localize: true
});
