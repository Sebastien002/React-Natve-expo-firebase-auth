/**
 * Authentication Reducer
 */
import {
  ActionNames
} from '../actions';
import {getError} from '../../utils/request';

/**
 * Reducer Function
 * @param state
 * @param action
 * @returns {*}
 */
export default function(state = null, action) {
    switch (action.type) {
        case ActionNames.REGISTER:
        case ActionNames.LOGIN :
        case ActionNames.CHECK_LOGIN :
        //case ActionNames.GET_PROFILE :
        case ActionNames.SAVE_PROFILE :
            let data = action.payload;
            //alert data.stsTokenManager;
            return {
                ...data
            };
      case ActionNames.LOGOUT :
        return null;
    }
    return state;
}
