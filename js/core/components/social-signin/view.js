import React from "react";
import Button from "../button";

/**
 * JSX View
 * @returns {XML}
 */
var view = function () {
    const type = this.getType();
    const {triggerElement,triggerProps} = this.props;

    let element = null;
    if (triggerElement) {
        /**
         * element should support onPress or onClick event
         */
        element = React.cloneElement(triggerElement, {
            onPress: this.authenticate.bind(this),
            onClick: this.authenticate.bind(this)
        })
    } else {
        switch (type) {
            case 'facebook':
                element = (
                    <Button
                        text="Google"
                        {...triggerProps}
                        onClick={this.authenticate.bind(this)}
                    />
                );
                break;
            case 'google':
                element = (
                    <Button
                        text = {"Google"}
                        {...triggerProps}
                        onClick={this.authenticate.bind(this)}
                    />
                );
                break;
            default:
                //Throw Error for unsupported type
                this.validateType()
        }
    }

    return element
}
module.exports = view
