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

export function fetchingUsers() {
  return {
    type: ACTIONS.REQUEST_USERS,
  };
}

export function userResults(users) {
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
