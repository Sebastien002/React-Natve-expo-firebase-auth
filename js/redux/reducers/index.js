/**
 * Root Reducer for all reducers
 */
import {combineReducers} from "redux";

import sample from "./sample";
import user from "./user";
import auth from "./auth";
import ui from "./ui";
const createRootReducer = function (thirdPartyReducers) {
    return combineReducers({
        ...thirdPartyReducers,
        config: (state = {}) => state,

        sample,
        user,
        auth,
        ui,
        /**
         * The reason why here emitter is not initialized as due
         * to server side rendering we should keep it to null and
         * initialize only when client side is loaded
         * @param state
         */
        emitter: (state = null) => state
    })
}
export default createRootReducer
