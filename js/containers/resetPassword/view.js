import React from "react";
import styles from "./styles";
import {Image, ScrollView, Text, View} from "react-native";
import {Form, Link} from "arivaa-basic";
import logo from "../../../assets/logo-basic-hr.png";
import lock from "../../../assets/lock.png";
import back from "../../../assets/back.png";
/**
 * Returns the JSX Markup for the view
 * @returns {XML}
 */
var view = function () {
    const {password, cpassword} = this.validations;
    const {translate} = this.props;
    const formElements = [
        {
            type: "password",
            name: "password",
            inputProps: {
                clear: true,
                placeholder: translate("common.password.placeholder"),
                labelNumber: 1.5,
                style: [styles.input],
                placeholderTextColor: "#fff",
                styles: {
                    input: {
                        color: "#fff"
                    }
                },
                children: (
                    <Image
                        resizeMode="contain"
                        source={lock}
                        style={[styles.inputIcon]}
                    />
                )
            },
            options: password
        },
        {
            type: "password",
            name: "cpassword",
            inputProps: {
                clear: true,
                placeholder: translate("common.confirmPassword.placeholder"),
                labelNumber: 1.5,
                style: [styles.input],
                placeholderTextColor: "#fff",
                styles: {
                    input: {
                        color: "#fff"
                    }
                },
                children: (
                    <Image
                        resizeMode="contain"
                        source={lock}
                        style={[styles.inputIcon]}
                    />
                )
            },
            options: cpassword
        }
    ];
    return (
        <View style={[styles.container]}>
            <ScrollView>
                <Link link="verification" style={[styles.back]}>
                    <Image
                        resizeMode="contain"
                        source={back}
                        style={[styles.backIcon]}
                    />
                </Link>
                <View style={[styles.logoContainer]}>
                    <Image
                        resizeMode="contain"
                        source={logo}
                        style={[styles.logo]}
                    />
                </View>
                <Text style={[styles.pageTitle]}>{translate("resetPassword.title")}</Text>
                <Text style={[styles.message]}>{translate("resetPassword.message")}</Text>
                <View style={[styles.form]}>
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
                            text: translate("resetPassword.submit")
                        }}
                    >
                    </Form>
                </View>
            </ScrollView>
        </View>
    )
};

module.exports = view;
