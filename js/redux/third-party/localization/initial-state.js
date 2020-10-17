import Flat from "flat";
import * as translations from "../../../config/translations";
/**
 * Create Translations - Logic is taken from react-redux-localize/lib/locale.js - translations method
 * @returns {{}}
 */
const createTranslations = function () {
    let obj = {};
    Object.values(translations).map((value) => {
        obj = {
            ...obj,
            ...Flat.flatten(value, {safe: true})
        }
    })
    return obj
}

/**
 * This is initial state used for server side rendering
 * Its format should be same what is expected by react-redux-localize
 */
export default function () {
    return {}
}
