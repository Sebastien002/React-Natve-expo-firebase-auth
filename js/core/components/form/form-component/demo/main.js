import React, {Component} from "react";
import ComponentView from "./view";

/**
 * @description Form Component Demo
 * @type Component
 * @author Inderdeep
 */

export default class Main extends Component {

    /**
     * Container
     * @param props
     */
    constructor(props) {
        super(props);
        this.validations = {
            "email": {
                rules: [
                    {required: true, message: "Please enter your email"},
                    {type: "email", message: "Please enter valid email"}
                ],

            },
            "password": {
                rules: [
                    {required: true, message: "Please enter your password"},
                    {min: 4, message: "Password Length should be minimum 6"}
                ],

            },
            "date": {
                rules: [
                    {required: true, message: "Please select date"},
                ],
                initialValue : new Date()

            },
            "country": {
                rules: [
                    {required: true, message: "Please enter your country"},
                ],

            },
            "image": {
                rules: [
                    {required: true, message: "Please select your profile image"},
                ],

            },
            "percentage": {
                rules: [
                    {required: true, message: "Please select percentage"},
                ],
                initialValue : 50

            },
            "salary": {
                rules: [
                    {required: true, message: "Please select salary"},
                ],
                initialValue : [10000,15000]

            }

        }
    }

    /**
     * ComponentDidMount Hook
     */
    componentDidMount() {

    }

    /**
     * On Submit
     */
    onSubmit(values) {
        alert("Values Submitted - "+JSON.stringify({
                    ...values,
                image : "Image URL You selected"
            }));
    }

    /**
     * Render Method
     * @returns {*}
     */
    render() {
        return (ComponentView.bind(this))()
    }
}

Main.displayName = 'Form-Demo';
