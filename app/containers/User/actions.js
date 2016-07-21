/*
 *
 * User actions
 *
 */

import {
  DEFAULT_ACTION,
  ACTIONS,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function fetchingUsers(apiKey) {
  return {
    type: ACTIONS.REQUEST_USERS,
    apiKey: apiKey,
  };
}

export function userResults(users) {
  console.log(users);
  return {
    type: ACTIONS.RECEIVING_USERS,
    users: users
  };
}

export function userResultsError(err) {
  return {
    type: ACTIONS.RECEVING_ERR,
    err: err
  };
}

export function updateForm(field, value) {
    return {
        type: ACTIONS.UPDATE_FORM,
        field,
        value
    }
}
