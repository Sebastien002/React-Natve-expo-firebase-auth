import React from "react";
import ImagePicker from '../../image-picker';
/**
 * View
 * @returns {XML}
 */
var view = function () {
    const {value,loading} = this.state;
    return (
        <ImagePicker
            thumbnailProps = {{
                loading : loading
            }}
            {...this.props}
            value = {value}
            onChange={this.onChange.bind(this)}
        />
    )
}
module.exports = view
