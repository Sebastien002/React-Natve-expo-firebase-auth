import {setActiveLanguage} from "react-localize-redux";

/**
 * Sets the default language
 * @param dispatch
 * @param language
 */
export default function (dispatch, language) {
    dispatch(setActiveLanguage(language));
}
