/*
 *
 * User constants
 *
 */

export const DEFAULT_ACTION = 'app/User/DEFAULT_ACTION';

export const ACTIONS = {
  REQUEST_USERS: 'REQUEST_USERS',
  RECEIVING_USERS: 'RECEIVING_USERS',
  RECEVING_ERR: 'RECEVING_ERR',
  GET_USER_LIST: 'GET_USER_LIST',
  UPDATE_FORM: 'UPDATE_FORM',
};

const ApiRoot = 'http://jsonplaceholder.typicode.com';
export const API_URL = {
  users: `${ApiRoot}/users`,
};
