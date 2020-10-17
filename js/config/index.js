
/**
 * This exports all the general client app configuration
 */

import * as Translations from './translations';
import * as Environment from './environment';
import firebaseApp,{firebaseConfig} from './firebase'
import './analytics';
export {
    Translations,
    Environment,
    firebaseApp,
    firebaseConfig
}
export {default as Admob} from './adMob'
