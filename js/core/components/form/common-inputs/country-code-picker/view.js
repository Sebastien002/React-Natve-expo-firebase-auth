import React from "react";
import Select from '../../../select'
/**
 * View
 * @returns {XML}
 */
var view = function () {
    const {value} = this.state;
    return (
        <Select
            type="modal"
            title = "Select Country"
            multiple={false}
            {...this.props}
            data={this.getCountryCodeMap()}
            value={value}
            onChange={this.onChange.bind(this)}

        />
    )
}
module.exports = view
