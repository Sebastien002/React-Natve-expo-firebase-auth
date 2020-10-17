import React from "react";
import ToastContainer from 'antd-mobile-rn/es/toast/ToastContainer.native'

/**
 * View
 * @returns {*}
 */
var view = function () {
    const {visible} = this.state;
    return visible?(
        <ToastContainer
            {...this.state}
        />
    ):null
}
module.exports = view
