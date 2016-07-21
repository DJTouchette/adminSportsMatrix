/*
 *
 * Login reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  ACTIONS,
} from './constants';

const initialState = fromJS({});

function loginReducer(state = initialState, action) {
  console.log(state);
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;

    case ACTIONS.REQUEST_LOGIN:
      console.log(`the action is ${action.type} the state is ${state}`);
      return state;

      case ACTIONS.RECEIVE_LOGIN:
        console.log(`the action is ${action.activeUser} the state is ${state}`);
        return Object.assign({}, state, {
          ...state,
          activeUser: action.activeUser,
       });

      case ACTIONS.RECEIVING_ERR:
        console.log(`the action is ${action.err} the state is ${state}`);
        return Object.assign({}, state, {
          ...state,
         err: action.err,
       });

       case ACTIONS.ADD_API_KEY:
        console.log('haaaaay');
        return Object.assign({}, state, {
          ...state,
         apiKey: action.apiKey,
       });

       case ACTIONS.UPDATE_FORM:
        return {
            ...state,
            [action.field]: action.value
        }

    default:
      return state;
  }
}

export default loginReducer;
