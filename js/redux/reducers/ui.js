/**
 * Modal State Reducer
 */
import {ActionNames} from "../actions";


/**
 * Reducer Function
 * @param state
 * @param action
 * @returns {*}
 */
export default function (state = {}, action) {
    let output = null;
    const payload = action.payload;
    //console.log(action)
    switch (action.type) {
        case ActionNames.UI_SET_PROPERTY :
            output = Object.assign({}, state);
            output[payload.name] = payload.value;
            return output;
        case ActionNames.UI_DELETE_PROPERTY :
            output = Object.assign({}, state);
            delete output[payload.name]
            return output;


    }
    return state;
}
