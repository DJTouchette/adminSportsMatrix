/*
 *
 * Operations reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  ACTIONS,
} from './constants';

const initialState = fromJS({});

function operationsReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;

  case ACTIONS.REQUEST_OPERATIONS:
    console.log(`the action is ${action.type} the state is ${state}`);
    return Object.assign({}, state, {
      ...state,
      apiKey: action.apiKey,
    });

  case ACTIONS.RECEIVING_OPERATIONS:
    console.log(`the action is ${action.operations} the state is ${state}`);
    return Object.assign({}, state, {
      ...state,
      operationsList: action.operations,
     });
  }

}

export default operationsReducer;
