import React, {Component} from "react";
import {Modal} from "antd-mobile-rn";

const prompt = Modal.prompt

const showPrompt = (inputName, description, config) => {
    config = config || {};
    let promise = new Promise((resolve, reject) => {
        prompt(inputName, description,
            [
                {
                    text: config.okText || "Save",
                    onPress: value => {
                        setTimeout(() => {
                            resolve(value);
                        }, 700)
                    }
                },
                {
                    text: config.cancelText || "Cancel",
                    onPress: value => {
                        setTimeout(() => {
                            reject("User cancelled the prompt");
                        }, 700)
                    }
                },
            ], config.inputType || "default", "This is default value")
    });
    return promise;
}
export default showPrompt;

