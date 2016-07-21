/*
 *
 * Operations actions
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

export function fetchingOperations(apiKey) {
  return {
    type: ACTIONS.REQUEST_OPERATIONS,
    apiKey: apiKey,
  };
}

export function operationResults(operations) {
  return {
    type: ACTIONS.RECEIVING_OPERATIONS,
    operations: operations
  };
}
