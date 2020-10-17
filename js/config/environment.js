import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
export const APP_NAME = 'app';
export const LOGGING = 'debug';
export const TESTING = false;
export const THEME = 'theme1';
export const LANG = 'en';
const isStandAloneApp = Constants.appOwnership == "standalone";
export const FACEBOOK = {
    appId: "513432372363654",
    scope: ['public_profile', 'email']
};
//Array has first element as android client Id and second as ios client id
export const GOOGLE = {
    appId: isStandAloneApp ?
        ["69935791112-q8q0k1i908pmtk9ua7fbntoeriaff9dg.apps.googleusercontent.com",
            "69935791112-cqnuom5dm2q870o7f5coacsivvpiuskr.apps.googleusercontent.com"]:
        ["69935791112-29dfkr3n0fhtp7s0k51ctleireu44sqq.apps.googleusercontent.com",
            "69935791112-f29ach1noraci1cv5ben4evobtb1hir7.apps.googleusercontent.com"],
    scope: ['profile', 'email']
};
export const WEBVIEW_URL = "https://arivaa-firebase.laxaar.com/webview.html";

/**
 * For complete reference check -
 * https://docs.expo.io/versions/v26.0.0/sdk/permissions
 * @type {[*]}
 */
export const PERMISSIONS = [
    Permissions.CAMERA,
    Permissions.NOTIFICATIONS,
    Permissions.LOCATION
];

export const GOOGLE_PLACES_KEY = "AIzaSyD9Mg0CgGHV_pJx1YLZl2_WyuRYQaSoiUY";

export const PROFILE_IMAGES_PATH = "profileImages";
