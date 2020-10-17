import React, {Component} from "react";
import {connect} from "react-redux";
import ComponentView from "./view";
import preProcess from "../preprocess";
import {Toast} from "arivaa-basic/components";
import {ActionNames, createAction} from "app-redux/actions";
import {addListener, scheduleLocalNotification} from "../../utils/notifications";
class Main extends Component {

    /**
     * Container
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            token: null,
            notification: (props.navigation.state?props.navigation.state.notification:null) || null
        };
        this.validations = {
            "text": {
                rules: [
                    {required: true, message: "Please enter notification text"},
                    {max: 500, message: "Notification text is too long"}
                ],
                initialValue : "Hey how are you?"
            }
        };
    }

    /**
     * ComponentDidMount Hook
     */
    componentDidMount() {
        this._notificationSubscription = addListener(this.handleNotification.bind(this));
    }
    /**
     * Schedule Local Notification
     */
    scheduleLocalNotification() {
        scheduleLocalNotification({
            title: "Check this!",
            body: "Arivaa is awesome. Click me to check awesomeness"
        }, 5);
        Toast.success("Please exit the app to see the notification and wait 5-10 seconds");
    }

    /**
     * Handle Submit
     * @param values
     */
    async onSubmit(values){
        const {auth,receivePushNotification} = this.props;
        let notification = {
            title : "You said!!",
            body : values.text,
            data : {
                abc : "adad"
            }
        };
        try{

            setTimeout(async ()=>{
                Toast.loading("Waiting..");
                const action = await receivePushNotification([
                    {
                        uid:auth.uid,
                        data : {
                            ...notification
                        }
                    }
                ]);
                if(!action.error){

                } else {
                    throw action.payload.response;
                }
                Toast.success("Got notification, Check payload below");
            },5000);
            Toast.success("Please exit the app to see the notification and  wait 5-10 seconds");
        } catch(e){
            console.log(e)
            Toast.fail("Error while getting you a notification")
        }
    }

    /**
     * Handle Notification Received
     */
    handleNotification(notification) {
        Toast.info("Received  notification.");
        this.setState({notification});
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
         * Receive Push Notification Action Creator
         * @param drawerId
         */
        receivePushNotification: (data) => {
            return dispatch(createAction(ActionNames.RECEIVE_PUSH_NOTIFICATION, data))
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
Main.displayName = "Push-Notifications";
export default preProcess(Main, {
    connect: [mapStateToProps, bindAction],
    localize: true
});
