import React, {Component} from 'react';
import ComponentView from './view';
import {ActionNames, createAction} from 'app-redux/actions';
import preProcess from '../preprocess';
import {Toast} from 'antd-mobile-rn';
import Spinner from '../../components/spinner';
import girl from '../../../assets/girl.jpg';
import firebase from 'firebase';
import {getRecaptchaApplicationVerifier, uploadImage} from '../../utils/firebase';
import {parse as parsePhoneNumber, isValidNumber} from 'libphonenumber-js'
import {PROFILE_IMAGES_PATH} from '../../config/environment';

/**
 * @description Login Container
 * @type Container
 * @author Inderdeep
 */
class Main extends Component {

    /**
     * Container
     * @param props
     */
    constructor(props) {
        super(props);
        this.setValidations({});
        this.state = {
            profileImage: null,
            renderRecaptcha: false,
            confirmOtp: false
        }

    }

    /**
     * ComponentDidMount Hook
     */
    componentDidMount() {
        this.getProfile();
    }

    /**
     * Component will receive props hook
     * @param newProps
     */
    componentWillReceiveProps(newProps) {

    }

    /**
     * Set Validations
     */
    setValidations(profile) {
        const {translate} = this.props;
        /**
         * Parse the phone number into the country code and phone number
         * @type {{}}
         */
        const parsedPhone = profile.phoneNumber ? parsePhoneNumber(profile.phoneNumber, {extended: true}) : {};
        this.validations = {
            "name": {
                rules: [
                    {required: true, message: translate("common.name.error.required")},
                ],
                initialValue: profile.displayName
            },
            "email": {
                rules: [
                    {required: true, message: translate("common.email.error.required")},
                    {type: "email", message: translate("common.email.error.invalid")}
                ],
                initialValue: profile.email
            },
            "phone": {
                rules: [
                    {min: 10, message: translate("common.phone.error.min")},
                    {max: 15, message: translate("common.phone.error.max")},
                    {pattern: "^(0|[1-9][0-9]*)$", message: translate("common.phone.error.invalid")}
                ],
                initialValue: parsedPhone.phone
            },
            "countryCode": {
                /**
                 * Adding + is neccesary since we have a list of country codes with + included
                 */
                initialValue: parsedPhone.countryCallingCode ? ["+" + parsedPhone.countryCallingCode] : ["+91"]
            }
        }
    }

    /**
     * set profile image in state
     * @param profileImage
     */
    setProfileImage(profileImage, result) {
        this.setState({
            profileImage: profileImage || girl,
            result
        });
    }

    /**
     * Get profile and set initial values in screen
     */
    getProfile() {
        const {getProfile, user, auth, translate} = this.props;
        Spinner.start();
        getProfile().then(() => {
            this.setValidations({
                ...auth,
                ...user
            });
            this.setProfileImage(user.photoURL);
            Spinner.stop();
        }).catch((err) => {
            Spinner.stop();
            Toast.fail(translate("profile.error"), 0.5);
        })
    }

    /**
     * On Submit of form
     * @param errors
     * @param values
     */
    async onSubmit(values) {
        const {user} = this.props;
        Spinner.start();
        let data = {
            displayName: values.name
        };
        const {translate} = this.props;
        values.phone = values.phone || ""
        const phoneNumber = values.countryCode[0].concat(values.phone);
        if (values.phone !== "") {
            if (!isValidNumber(phoneNumber)) {
                Toast.fail(translate("common.phone.error.invalid"));
                return;
            }
        }

        /**
         * Change image only if image has been reselected
         */
        if (this.state.profileImage != girl && user.profileImage != this.state.profileImage) {
            try {
                data.photoURL = await uploadImage(this.state.profileImage, `${PROFILE_IMAGES_PATH}/${user.uid}.png`);
            } catch (e) {

                Spinner.stop();
                Toast.fail(translate("profile.saveImageError"));
                return;
            }
        }
        let promise = null;
        /**
         * Update email if email is changed
         */
        if (user.email != values.email) {
            promise = this.updateEmail(values.email);
        }
        /**
         * Update phone number if changed
         */
        if ((values.phone || "") != "" && user.phoneNumber != phoneNumber) {
            promise = promise ? promise.then(this.updatePhone.bind(this, phoneNumber)) : this.updatePhone(phoneNumber);
        }
        /**
         * Update profile
         * No need to handle error here
         * cz it is already handled
         * @type {*}
         */
        promise = promise ? promise.then(this.updateProfile.bind(this, data)).catch((e) => {
        }) : this.updateProfile(data);

        return promise;
    }

    /**
     * Update profile
     * @param data
     * @returns {!firebase.Thenable.<*>|*|Promise<R>|Promise.<T>}
     */
    updateProfile(data) {
        const {saveProfile, navigation, translate} = this.props;
        return firebase.auth().currentUser.updateProfile(data).then(() => {
            return saveProfile(firebase.auth().currentUser.toJSON()).then((action) => {
                Spinner.stop();
                if (action.error) {
                    Toast.fail(translate("profile.saveError"), 0.5);
                } else {
                    Toast.success(translate("profile.success"), 0.5);
                    /**
                     * Redirect only if phone number has not been changed
                     */
                    if (!this.state.phone) {
                        navigation.navigate("profile");
                    }
                }
            })
        }).catch((e) => {
            console.log(e);
            Toast.fail(translate("profile.saveError"), 0.5);
        })
    }

    /**
     * Change Image
     * @param result
     */
    changeImage(result) {
        if (!result.cancelled) {
            this.setProfileImage(result.uri, result);
        }
    }

    /**
     * Update Email
     * @param email
     * @returns {!firebase.Promise.<void>|Promise<any>}
     */
    updateEmail(email) {
        const {translate} = this.props;
        return firebase.auth().currentUser.updateEmail(email).catch((e) => {
            if (e.code == 'auth/email-already-in-use') {
                Toast.fail(translate("signUp.duplicate.email"), 0.5);
            } else {
                Toast.fail(translate("profile.email.update.error"), 0.5);
            }
            throw e;
        });
    }

    /**
     * Update Phone
     * @param phone
     * @param linked
     * @returns {Promise<any>|!firebase.Promise.<void>}
     */
    updatePhone(phone, linked) {
        /**
         * Flow - For phone number updation in firebase, We have to verify recaptcha
         * and then otp
         */
        this.setState({
            renderRecaptcha: true,
            phone: phone
        });
        return Promise.resolve(null);
    }

    /**
     * Parse recaptcha string from webview
     * @param recaptcha
     */
    parseRecaptcha(recaptcha) {
        this.setState({
            recaptcha,
            renderRecaptcha: false
        }, this.sendSms.bind(this))
    }

    /**
     * Send SMS for verification
     * @param phone
     */
    sendSms() {
        const {translate} = this.props;
        const {recaptcha, phone} = this.state;
        Spinner.start();
        //Verify if recaptcha exists
        if (!recaptcha) {
            return;
        }
        /**
         * Construct Recaptcha Verifier and update or link
         * the phone number
         * @type {null}
         */
        let promise = null;
        const currentUser = firebase.auth().currentUser;
        const RecaptchaVerifier = getRecaptchaApplicationVerifier(this.state.recaptcha);
        if (!currentUser.phoneNumber) {
            promise = currentUser.linkWithPhoneNumber(phone, RecaptchaVerifier);
        } else {
            promise = firebase.auth().signInWithPhoneNumber(phone, RecaptchaVerifier);
        }
        promise.then((result) => {
            this.setState({
                verificationId: result.verificationId,
                confirmOtp: true
            }, Spinner.stop);
        }).catch((e) => {
            //Todo : Handle specific error codes for invalid phone number and invalid captcha
            Toast.fail(translate("login.fail") + " phone, Please try again", 0.5);
        });
    }

    /**
     * Verify Otp received
     * @param otp
     */
    verifyOtp(otp) {
        const {verificationId} = this.state;
        const {saveProfile, navigation, translate} = this.props;
        const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, otp);
        let promise = null;
        if (!firebase.auth().currentUser.phoneNumber) {
            promise = firebase.auth().currentUser.linkWithCredential(credential);
        } else {
            promise = firebase.auth().currentUser.updatePhoneNumber(credential);
        }
        promise.then(() => {
            saveProfile(firebase.auth().currentUser.toJSON()).then(() => {
                navigation.navigate("profile");
            });
            Toast.success(translate("profile.phone.update.success"), 0.5);
        }).catch(e => {
            if (e.code == "auth/credential-already-in-use") {
                Toast.fail(translate("common.phone.error.linked"), 0.5);
            } else {
                Toast.fail(translate("verification.fail"), 0.5);
            }
        });
    }


    /**
     * Render Method
     * @returns {*}
     */
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
         * Save Profile Action Creator
         * @param drawerId
         */
        saveProfile: (data) => {
            return dispatch(createAction(ActionNames.SAVE_PROFILE, data))
        },
        /**
         * Save Profile Action Creator
         * @param drawerId
         */
        getProfile: (data) => {
            return dispatch(createAction(ActionNames.GET_PROFILE, data))
        }
    }
};
/**
 * Bind State to props
 * @param dispatch
 * @returns {{Object}}
 */
const mapStateToProps = (state) => {
    const {auth, user} = state;
    return {
        auth,
        user
    };
};
Main.displayName = "Edit-Profile";
export default preProcess(Main, {
    connect: [mapStateToProps, bindAction],
    localize: true
});

