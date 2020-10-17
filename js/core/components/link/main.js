import React, {Component} from "react";
import PropTypes from "prop-types";
import ComponentView from "./view";
import {withNavigation} from 'react-navigation'

/**
 * @description Link
 * @type Component
 * @author Inderdeep
 */
class Main extends Component {

    /**
     * Container
     * @param props
     */
    constructor(props) {
        super(props)

    }
    static get defaultProps() {
        return {
            propTypes: {
                text: PropTypes.string,
                onPress: PropTypes.function,
                style: PropTypes.object,
                textStyle: PropTypes.object,
                link: PropTypes.string
            }
        };
    }
    /**
     * ComponentDidMount Hook
     */
    componentDidMount() {

    }

    /**
     * onPress
     */
    onPress() {
        let {onPress, link, navigation} = this.props;
    
        /**
         * Special Handling for Drawer in react-navigation since it
         * has been removed in new releases.
         */
        if (link == "ToggleDrawer") {
            navigation.toggleDrawer?navigation.toggleDrawer():null;
        } else if (link == "OpenDrawer") {
            navigation.openDrawer? navigation.openDrawer():null;
        } else if (link == "CloseDrawer") {
            navigation.closeDrawer?navigation.closeDrawer():null;
        } else if (link && navigation) {
            navigation.navigate(link)
        }

        if (onPress instanceof Function) {
            onPress.apply(this, this.args);
        }
    }

    /**
     * Render Method
     * @returns {*}
     */
    render() {
        return (ComponentView.bind(this))()
    }
}
export {
    Main
} ;
export default withNavigation(Main)
Main.displayName = 'Link'

