import {api} from '../config';
//import {} from './custom';

import {identifyUser} from '../../utils/analytics'

const ActionNames = {
    SAMPLE_ACTION: "SAMPLE_ACTION",
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT",
    FORGOT: "FORGOT",
    CHECK_LOGIN: "CHECK_LOGIN",
    REGISTER: "REGISTER",
    UI_SET_PROPERTY: "UI_SET_PROPERTY",
    UI_DELETE_PROPERTY: "UI_DELETE_PROPERTY",
    GET_PROFILE: "GET_PROFILE",
    CHECK_DUPLICATE_EMAIL: "CHECK_DUPLICATE_EMAIL",
    VERIFY_OTP: "VERIFY_OTP",
    VERIFY_ACCOUNT: "VERIFY_ACCOUNT",
    SAVE_PROFILE: "SAVE_PROFILE",
    /**
     * Reset is a general action for resetting data
     */
    RESET: "RESET",
    UPLOAD_FILE: "UPLOAD_FILE",
    RESET_PASSWORD: "RESET_PASSWORD",
    CHANGE_PASSWORD: "CHANGE_PASSWORD",
    SAVE_PUSH_TOKEN : "SAVE_PUSH_TOKEN",
    RECEIVE_PUSH_NOTIFICATION : "RECEIVE_PUSH_NOTIFICATION"
};
export const Names = ActionNames;
/**
 * Actions configuration -
 * All actions are configured here
 * Configuration Schema - {
 *  name - Action Name
 *  type - Type of Action - ajax or normal ->
 *  config - {
 *      url => For Ajax
 *      method => For Ajax
 *      headers => For Ajax
 *      promise => For normal action -> if we want data to be resolved as dummy promise
 *      getData => General -> If we want to customize the data -> Input data is passed as argument
 *      getParams => For Ajax -> If we want to get params out of input data
 *  }
 * }
 * @type {[*]}
 */
const config = [
    {
        name: ActionNames.SAMPLE_ACTION,
        config: {
            getData: () => {
                return {
                    text: "Yo this is updated text"
                }
            }
        }
    },
    {
        name: ActionNames.UI_SET_PROPERTY
    },
    {
        name: ActionNames.UI_DELETE_PROPERTY
    },
    {
        name: ActionNames.LOGIN,
        config: {
            promise : true,
            getData : (data)=>{
                /**
                 * Configure analytics
                 */

                identifyUser(data.uid,{
                    name : data.displayName,
                    email : data.email
                });
                return data;
            }
        }
    },
    {
        name: ActionNames.LOGOUT,
        config: {
            promise: true
        }
    },
    {
        name: ActionNames.FORGOT,
        type: "ajax",
        config: {
            url: api.FORGOT,
            method: 'POST'
        }
    },
    {
        name: ActionNames.REGISTER,
        config: {
            promise : true
        }
    },
    {
        name: ActionNames.CHECK_DUPLICATE_EMAIL,
        type: "ajax",
        config: {}
    },
    {
        name: ActionNames.GET_PROFILE,
        type: "ajax",
        config: {
            method : "GET",
            url : api.GET_PROFILE
        }
    },
    {
        name: ActionNames.VERIFY_OTP,
        type: "ajax",
        config: {
            url: api.VERIFY_OTP,
            method: 'POST'
        }
    },
    {
        name: ActionNames.VERIFY_ACCOUNT,
        type: "ajax",
        config: {}
    },
    {
        name: ActionNames.RESET
    },
    {
        name: ActionNames.UPLOAD_FILE,
        type: "ajax",
        config: {}
    },
    {
        name: ActionNames.RESET_PASSWORD,
        type: "ajax",
        config: {
            url : api.RESET_PASSWORD,
            method: 'POST'
        }
    },
    {
        name: ActionNames.CHANGE_PASSWORD,
        type: "ajax",
        config: {
            url : api.CHANGE_PASSWORD,
            method: 'POST'
        }
    },
    {
        name: ActionNames.SAVE_PUSH_TOKEN,
        type: "ajax",
        config: {
            url : api.SAVE_PUSH_TOKEN,
            method: 'POST'
        }
    },
    {
        name: ActionNames.RECEIVE_PUSH_NOTIFICATION,
        type: "ajax",
        config: {
            url : api.RECEIVE_PUSH_NOTIFICATION,
            method: 'POST'
        }
    },
    {
        name: ActionNames.SAVE_PROFILE,
        config: {
           promise : true
        }
    }
];
/**
 * Create a map so that it is easy to query
 * @type {{}}
 */
let configMap = {};
config.map((item) => {
    configMap[item.name] = item;
});

export function getActionConfig(name) {
    return configMap[name];
}

export default config;
