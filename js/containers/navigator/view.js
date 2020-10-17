import React from "react";
import {Navigator} from "../../routing";


/**
 * Returns the JSX Markup for the view
 * @returns {XML}
 */
var view = function () {
    return (
        <Navigator onNavigationStateChange={this.onNavigationStateChange.bind(this)}/>
    );
}
module.exports = view;
