import React, {Component} from "react";
import ComponentView from "./view";
import {ActionNames, createAction} from "app-redux/actions";
import preProcess from "../preprocess";
import {Toast} from "arivaa-basic/components";
import Spinner from "../../components/spinner";
import {login,signInWithGithub,signInWithTwitter,handleSocialSignInError,handleSocialSignIn} from '../login';
import firebase from 'firebase';
import {signUp} from '../../redux/actions/mock/authentication';

class Main extends Component {
    static get defaultProps() {
        return {
            title: 'SignUpView'
        };
    }

    /**
     * Constructor
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            twitterSignIn : false,
            githubSignIn : false
        }
        this.setValidations();
        this.login = login.bind(this);
        this.signInWithTwitter = signInWithTwitter.bind(this);
        this.signInWithGithub = signInWithGithub.bind(this);
        this.handleSocialSignIn = handleSocialSignIn.bind(this);
        this.handleSocialSignInError = handleSocialSignInError.bind(this);
    }

    /**
     * Set Validations
     */
    setValidations() {
        const {translate} = this.props;
        this.validations = {
            "name" : {
                rules : [
                    {required : true,message : translate("common.name.error.required")},
                ],
                //initialValue : "Demo User"
            },
            "email" : {
                rules : [
                    {required : true,message : translate("common.email.error.required")},
                    {type : "email",message : translate("common.email.error.invalid")}
                ],
                //initialValue : "demo@laxaar.com"
            },
            "password" : {
                rules : [
                    {required : true,message : translate("common.password.error.required")},
                    {min : 6,message : translate("common.passwordLength.error.required")}
                ],
                //initialValue:"123456"
            },
            "phone" : {
                rules : [
                    {min : 10,message : translate("common.phone.error.min")},
                    {max : 15,message : translate("common.phone.error.max")},
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
        const {translate} = this.props;
        Spinner.start();
        const errorHandler = ((e)=>{
            console.log(e);
            if(e.code == 'auth/email-already-in-use'){
               Toast.fail(translate("signUp.duplicate.email"),1);
            } else {
                Toast.fail(translate("signUp.fail"),1);
            }

        })
        signUp(values);
        Spinner.stop();
        // firebase.auth().createUserWithEmailAndPassword(values.email,values.password).then((response) => {
        //     Spinner.stop();

        //     firebase.auth().currentUser.updateProfile({
        //         displayName : values.name,
        //         phoneNumber : values.phone || 999999999
        //     }).then(()=>{
        //         signUp(firebase.auth().currentUser.toJSON());
        //     }).catch(errorHandler);

        // }).catch(errorHandler)
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
        signUp: (data) => {
            return dispatch(createAction(ActionNames.REGISTER, data))
        },
        /**
         * Login Action Creator
         * @param drawerId
         */
        login: (data) => {
            return dispatch(createAction(ActionNames.LOGIN, data))
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
Main.displayName = "SignUp";
export default preProcess(Main, {
    connect: [mapStateToProps, bindAction],
    localize: true
});
