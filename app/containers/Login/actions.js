/*
 *
 * Login actions
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
export function addApiKey(apiKey) {
  return {
    type: ACTIONS.ADD_API_KEY,
    apiKey: apiKey,
  };
}

export function fetchingLogin(email, password, ctx) {
  return {
    type: ACTIONS.REQUEST_LOGIN,
    email: email,
    password: password,
    ctx: ctx,
  };
}

export function loginResults(user) {
  return {
    type: ACTIONS.RECEIVE_LOGIN,
    activeUser: user
  };
}

export function loginResultsError(err) {
  console.log('loginerr');
  return {
    type: ACTIONS.RECEIVING_ERR,
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
