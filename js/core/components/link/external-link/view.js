import React from "react";
import Link from "../main";

var view = function () {
    return (
        <Link {...this.props} onPress={this.onPress.bind(this)} link={null}/>
    )
}
module.exports = view
