import React from "react";
import styles from "./styles";
import {Text, View} from "react-native";
import Form from "../index";
import CountryCodePicker from "../../common-inputs/country-code-picker";
import DateTime from "../../../date-time";
import Select from "../../../select";
import ImagePicker from "../../../image-picker";
import Slider from "../../../slider";

var view = function () {
    const {email, password, date,percentage,salary,image,country} = this.validations
    const formElements = [
        {
            type: 'email',
            name: 'email',
            inputProps: {
                clear: true,
                placeholder: 'Enter Email',
                labelNumber: 1.5,
                style: [styles.input]
            },
            options: email,
            before: (
                <Text style={[styles.label]}>
                    Enter Email Address <Text style={[styles.required]}>*</Text>
                </Text>
            )
        },
        {
            type: 'password',
            name: 'password',
            inputProps: {
                clear: true,
                placeholder: 'Enter Password',
                labelNumber: 1.5,
                style: [styles.input]
            },
            options: password,
            before: (
                <Text style={[styles.label]}>
                    Enter Password <Text style={[styles.required]}>*</Text>
                </Text>
            )
        }
    ];
    const formElements2 = [
        {
            'name': 'countryCode',
            'customElement': <CountryCodePicker type="modal"/>,
            before: (
                <Text style={[styles.label]}>
                    Select Country <Text style={[styles.required]}>*</Text>
                </Text>
            ),
            options: country
        },
        {
            'name': 'image',
            'customElement': <ImagePicker/>,
            before: (
                <Text style={[styles.label]}>
                    Select Image <Text style={[styles.required]}>*</Text>
                </Text>
            ),
            options: image
        },
        {
            'name': 'percentage',
            'customElement': <Slider/>,
            before: (
                <Text style={[styles.label]}>
                    Select Percentage <Text style={[styles.required]}>*</Text>
                </Text>
            ),
            options: percentage
        },
        {
            'name': 'salary',
            'customElement': (
                <Slider
                    type="range"
                    min = {1000}
                    max = {20000}
                    step = {500}
                />
            ),
            before: (
                <Text style={[styles.label]}>
                    Select Salary Range (in USD) <Text style={[styles.required]}>*</Text>
                </Text>
            ),
            options: salary
        },
        {
            'name': 'date',
            'customElement': (
                <DateTime type="date" triggerButtonProps={{
                    style: styles.margin
                }}/>
            ),
            before: (
                <Text style={[styles.label]}>
                    Select Date <Text style={[styles.required]}>*</Text>
                </Text>
            ),
            options: date
        }
    ];
    return (
        <View style={styles.container}>
            <Text style={[styles.description]}>
                A Form component will be useful to create any form in an application with variety of simple and complex
                input elements. All our data input elements are compatible with this form.
            </Text>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Simple Form with Inputs and Validations</Text>
                <Form
                    elements={formElements}
                    style={{
                        Body: styles.list
                    }}
                    onSubmit={this.onSubmit.bind(this)}
                    submitTrigger={{
                        buttonProps: {
                            style: styles.button
                        },
                        textProps: {
                            style: styles.buttonText
                        },
                        text: 'Sign In'
                    }}

                >​
                </Form>
            </View>
            <View style={[styles.section]}>
                <Text style={[styles.title]}>Form with Complex Inputs and Validations</Text>
                <Form
                    elements={formElements2}
                    style={{
                        Body: styles.list
                    }}
                    onSubmit={this.onSubmit.bind(this)}
                    submitTrigger={{
                        buttonProps: {
                            style: styles.button
                        },
                        textProps: {
                            style: styles.buttonText
                        },
                        text: 'Save'
                    }}
                >
                </Form>
            </View>
        </View>
    )
}
module.exports = view
