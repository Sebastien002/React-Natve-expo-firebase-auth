/**
 * Authentication Reducer
 */
import {
    ActionNames
} from '../actions';
/**
 * Reducer Function
 * @param state
 * @param action
 * @returns {*}
 */
export default function(state =null, action) {

    let data = null;
    switch (action.type) {
        case ActionNames.REGISTER:
        case ActionNames.LOGIN :
            data = action.payload;
            return {
                ...data
            };
        case ActionNames.LOGOUT:
            return null;
    }
    return state;
}
