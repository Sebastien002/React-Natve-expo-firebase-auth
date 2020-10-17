import React, {Component} from "React";
import createStore, {configureActions} from "../redux";
import ComponentView from "./view";
import {Linking} from "react-native";
import {askPermissions} from "../utils/permissions";
import {Environment} from "../config";
/**
 * Returns the main component to be used both in ios and android
 * @returns {Root}
 */
class Root extends Component {
    constructor() {
        super();
        const store = createStore();
        /**
         * Configure actions for third party or which require
         * the use of dispatch method outside containers
         */
        configureActions(store.dispatch)
        this.state = {
            store: store
        };

    }

    /**
     * Component Did Mount Hook
     */
    async componentDidMount() {
        Linking.addEventListener('url', this.handleAppUrls.bind(this));
        Linking.getInitialURL().then(this.handleAppUrls.bind(this));
        const permissionStatuses = await askPermissions(Environment.PERMISSIONS);
    }

    /**
     * Handle Application Urls
     * @param url
     */
    handleAppUrls(url) {

    }

    render() {
        return (ComponentView.bind(this))();
    }
}
Root.displayName = "Root";
//return Root
export default Root;
