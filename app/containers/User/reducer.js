/*
 *
 * User reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  ACTIONS,
} from './constants';

const initialState = fromJS({});

function userReducer(state = initialState, action) {
  console.log(state);
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;

    case ACTIONS.REQUEST_USERS:
      console.log(`the action is ${action.type} the state is ${state}`);
      return Object.assign({}, state, {
        ...state,
        apiKey: action.apiKey,
      });

      case ACTIONS.RECEIVING_USERS:
        console.log(`the action is ${action.users} the state is ${state}`);
        return Object.assign({}, state, {
          ...state,
          users: action.users,
       });

      case ACTIONS.RECEVING_ERR:
        console.log(`the action is ${action.err} the state is ${state}`);
        return Object.assign({}, state, {
         err: action.err,
       });

       case ACTIONS.UPDATE_FORM:
       console.log(`updating form ${[action.field]} ${ action.value3}`);
        return {
          ...state,
          [action.field]: action.value
        }
    default:
      return state;
  }
}

export default userReducer;
