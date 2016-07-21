/*
 *
 * Leagues reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  ACTIONS,
} from './constants';

const initialState = fromJS({});

function leaguesReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;

  case ACTIONS.FETCH_LEAGUES:
    console.log(`the action is ${action.apiKey} the state is ${state}`);
    return Object.assign({}, state, {
      ...state,
      apiKey: action.apiKey,
    });

    case ACTIONS.ADD_LEAGUES:
      console.log(`the action is ${action.leagues} the state is ${state}`);
      return Object.assign({}, state, {
        ...state,
        leagues: action.leagues,
      });

      case ACTIONS.UPDATE_FORM:
      console.log(`updating form ${[action.field]} ${ action.value} ${ action.id }`);
      console.log(action.id);
       return {
           ...state,
           [action.field]: action.value,
           field: [{[action.field]: action.value, id: action.id},],
       }

    default:
      return state;
  }
}

export default leaguesReducer;
