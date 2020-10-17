import faker from "faker";
import * as defaultStyles from './defaultStyles';
import React from "react";
import {Text,StyleSheet,Platform} from 'react-native';
import {decode} from 'base-64';
/**
 * Merge 2 objects
 * @param {*} obj1
 * @param {*} obj2
 */
export function mergeObjects(obj1, obj2) {
    for (let key in obj2) {
        if (obj2.hasOwnProperty(key)) {
            obj1[key] = obj2[key];
        }
    }
    return obj1;
}
/**
 * To Delete specified props from an object
 @param obj-Object
 @param arr-Keys which are to be removed
 */
export function getModifiedProps(obj, arr) {
    let newobj = {
        ...obj
    };
    arr.map(item => {
        delete newobj[item];
    });
    return newobj;
}
/**
 * Get Image
 * @param {*} image
 */
export function getImage(image) {
    if (image) {
        if (typeof image == "string") {
            return {uri: image};
        } else {
            return image;
        }
    }
    return null;
}

export function isArrayEqual(a, b) {
    return JSON.stringify(a) == JSON.stringify(b);
}
/**
 * Get Random Data
 * @param type
 */
export function getRandom(type, config) {
    if (!type) {
        console.warn("Type is mandatory for getRandom");
        return;
    }
    config = config || {};
    switch (type || "") {
        case "paragraph" :
            return faker.lorem.paragraph(config.min || 4, config.max);
        case "text" :
            return faker.lorem.sentence();
        case "image" :
            return "https://loremflickr.com/400/400/hot?lock="+getRandomNumber(1,10);
        case "contact" :
            return faker.helpers.createCard();
        case "contacts" :
            let arr = [];
            for (let i = 0; i < (config.count || 5); i++) {
                arr.push({
                    ...faker.helpers.createCard(),
                    avatar: faker.image.avatar()
                })
            }
            return arr;
        case "avatar" :
            return faker.image.avatar();
        case "quote" :
            return faker.company.catchPhrase();
        case "number" :
            return faker.random.number();
        case "company" :
            return {
                title: faker.company.companyName(),
                description: getRandom("paragraph")
            };
    }
    return;
}
/**
 * Merge Styles with antd component's styles object
 * To Enable Customization put a export in defaultStyles.js
 * @param styles
 * @param customStyles
 */
export function mergeStyles(componentName,customStyles){

    if(!defaultStyles || !componentName || !defaultStyles[componentName]){
        return customStyles;
    }
    customStyles = customStyles || {};
    const oldStyles = defaultStyles[componentName];
    let newStyles = {
        ...oldStyles
    };
    Object.keys(customStyles).map((key)=>{
        newStyles[key] = StyleSheet.flatten([newStyles[key],customStyles[key]]);
    });

    return newStyles;
}

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

/**
 * Get React node based on content
 * - Created it for text handling
 * @param content
 * @param props
 * @returns {*}
 */
export function getReactNode(content,props){
    if(!content){
        return null;
    } else if(typeof content == "string" || typeof content=="number"){
        return (
            <Text {...props}>
                {content}
            </Text>
        )
    } else {
        return content;
    }
}

/**
 * Get Text React node based on content
 * - Created it for text handling
 * @param content
 * @param props
 * @returns {*}
 */
export function getTextReactNode(content,props){
    if(!content){
        return null;
    } else if(typeof content == "string" || typeof content=="number"){
        return (
            <Text {...props}>
                {content}
            </Text>
        )
    } else {
        return null;
    }
}
/**
 * Check if is ios
 * @returns {boolean}
 */
export function isIos() {
    return Platform.OS == 'ios' ? true : false
}


/**
 * Convert data URI to blob
 * @param dataurl
 * @returns {*}
 */
export function dataURLtoBlob(dataurl) {
    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = decode(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {
        type: mime
    });
}


/**
 * Convert a data URI to file
 * @param dataURI
 * @returns {*}
 */
export function convertToFile(dataURI) {
    // convert base64/URLEncoded data component to raw binary data held in a string
    var byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
        byteString = decode(dataURI.split(',')[1]);
    else
        byteString = unescape(dataURI.split(',')[1]);

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to a typed array
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ia], {
        type: mimeString
    });
}
