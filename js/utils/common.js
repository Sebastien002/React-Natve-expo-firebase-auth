/**
 * Commonly used helper methods
 */
import {Platform} from "react-native";

/**
 * Deep clone a array
 * @param input
 */
export function deepCloneArray(input) {
    let newArray = input.map(a => Object.assign({}, a))
    return newArray;
}
/**
 * Check if is ios
 * @returns {boolean}
 */
export function isIos() {
    return Platform.OS == 'ios' ? true : false
}

//Temp in memory Storage
let tempStorage = {};
/**
 * Add Add to Temp Storage
 * @param key
 * @param value
 * @returns {boolean}
 */
export function addItemToTempStorage(key, value) {
    tempStorage[key] = value;
    return true;
}

/**
 * Get from temp storage
 * @param key
 * @param remove - autoremove
 * @returns {*}
 */
export function getItemFromTempStorage(key, remove) {
    let val = tempStorage[key];
    if (remove) {
        removeItemFromTempStorage(key);
    }
    return val;
}

/**
 * Remove from temp storage
 * @param key
 * @returns {boolean}
 */
export function removeItemFromTempStorage(key) {
    delete tempStorage[key];
    return true;
}

/**
 * Remove  null values from a object
 * @param obj
 * @returns {*}
 */
export function removeNullValues(obj) {
    for (var key in obj) {
        if (obj[key] == null) {
            delete obj[key];
        }
    }
    return obj;
}

/**
 * To convert a string to camel case
 * @param str
 */
export function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
        if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
        return index == 0 ? match.toLowerCase() : match.toUpperCase();
    });
}
/**
 * To convert first character of a string to uppercase
 * @param string
 * @returns {string}
 */
export function jsUcfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Parses the query string without ? and constructs a object
 * @param hash
 */
export function parseQueryString(str) {
    str = str || "";
    let pieces = str.split("&"), data = {}, i, parts;
    // process each query pair
    for (i = 0; i < pieces.length; i++) {
        parts = pieces[i].split("=");
        if (parts.length < 2) {
            parts.push("");
        }
        data[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
    }
    return data;
}
