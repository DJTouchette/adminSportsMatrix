/*
 *
 * Leagues actions
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

export function fetchingLeagues(apiKey) {
  return {
    type: ACTIONS.FETCH_LEAGUES,
    apiKey: apiKey,
  };
}

export function updateLeagues(apiKey, field, value, id) {
    return {
        type: ACTIONS.UPDATE_LEAGUES,
        field,
        value,
        apiKey,
        id,
    }
}

export function addingLeagues(leagues) {
  return {
    type: ACTIONS.ADD_LEAGUES,
    leagues: leagues,
  };
}

export function updateForm(field, value, id) {
    return {
        type: ACTIONS.UPDATE_FORM,
        id: id,
        field,
        value,
    }
}
