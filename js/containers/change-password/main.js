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
    setValidations(){
        const {translate} = this.props;
        this.validations = {
            "currentPassword" : {
                    rules : [
                        {required : true,message : "Please confirm your current password"}
                    ],
            },
            "password" : {
                rules : [
                    {required : true,message : translate("common.password.error.required")},
                    {min : 6,message : translate("common.passwordLength.error.required")}
                ],
            },
            "cpassword" : {
                rules : [
                    {required : true,message : translate("common.passwordConfirm.error.required")}
                ],
            }
        }
    }

    /**
     * On Submit of form
     * @param errors
     * @param values
     */
    onSubmit(values) {
        const {navigation,translate} = this.props;
        if(values.password!=values.cpassword){
            Toast.fail(translate("changePassword.mismatch"),0.5);
            return;
        }
        Spinner.start();
        const currentUser = firebase.auth().currentUser;
        firebase.auth().signInWithEmailAndPassword(currentUser.email, values.currentPassword).then(()=>{
            currentUser.updatePassword(values.password).then(()=>{
                Spinner.stop();
                Toast.success(translate("changePassword.success"),0.5);
                navigation.navigate("home")
            }).catch(e=>{
                Toast.fail(translate("changePassword.error"),0.5);
            });
        }).catch(e=>{
            Toast.fail(translate("resetPassword.error.oldPassword.wrong"),0.5);
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
         * Change Password Action Creator
         * @param data
         */
        changePassword: (data) => {
            return dispatch(createAction(ActionNames.CHANGE_PASSWORD, data))
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
Main.displayName = "ChangePassword";
export default preProcess(Main, {
    connect: [mapStateToProps, bindAction],
    localize: true
});
