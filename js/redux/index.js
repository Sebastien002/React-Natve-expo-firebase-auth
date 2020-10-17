/*
 Bootstrap redux
 */
import {applyMiddleware, compose, createStore} from "redux";
import createRootReducer from "./reducers";
import {enhancers, initialState, middleware} from "./config";
import {configureLocalization, localeReducer} from "./third-party/localization";
import {Translations} from "../config";
import {configureSocketListeners, socket} from "./config/middleware";
import {socketIoActions} from "./actions";

/**
 Combine enhancers and middlewares
 */
const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
)

/**
 * Create Third party reducers
 * @type {{locale, routing: *}}
 */
const thirdPartyReducers = {
    locale: localeReducer
}
/**
 * Get Third Party Plugins initial state while server side rendering e.g
 * localization
 * @param
 * @returns Object
 */
const getThirdPartyInitialState = () => {
    return {}
}
/**
 * Create Redux Store
 * @param initialPreloadedState
 * @returns {*}
 */
const store = function () {
    return createStore(
        createRootReducer(thirdPartyReducers),
        {
            ...initialState,
            ...getThirdPartyInitialState(),

        },
        composedEnhancers
    )

}

export function configureActions(dispatch) {
    /**
     * Configure Third Party Redux Plugins here that require access to dispatch
     */
//Localization
    configureLocalization(dispatch, Translations);
    /**
     * Configure Socket IO Listeners
     *
     * The reason we are configuring here is because we need dispatch
     * function,socket and socketIoActions at one place and we have put
     * all socketIo Related Redux handling in socket-io.js middleware
     */
    configureSocketListeners(dispatch, socket, socketIoActions);
}

export {
    initialState
}
export default store
