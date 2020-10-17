import React, {Component} from "react";
import {connect} from "react-redux";
import ComponentView from "./view";
import preProcess from "../../preprocess";
/**
 * @description Header With Menu
 * @type Container
 * @author Inderdeep
 */
class Main extends Component {
    /**
     * Constructor
     * @param props
     */
    constructor(props) {
        super(props);
    }

    /**
     * ComponentDidMount Hook
     */
    componentDidMount() {

    }

    /**
     * On Press of a item
     * @param event
     */
    onPress(event) {
        const {navigation, item, onPress} = this.props;
        if (item.route) {
            navigation.navigate(item.route)
        } else if (item.onPress) {
            onPress ? onPress(item) : null
        }

    }

    closeDrawer() {
        const {navigation} = this.props;
        navigation.navigate("DrawerClose")
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
    return {}
};
/**
 * Bind State to props
 * @param dispatch
 * @returns {{Object}}
 */
const mapStateToProps = (state) => {
    return {}
};
Main.displayName = "Drawer-Item"
export default preProcess(Main, {
    connect: [null, bindAction],
    localize: true
});
