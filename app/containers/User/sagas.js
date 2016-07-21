import { take, call, put, select } from 'redux-saga/effects';
import { ACTIONS, API_URL } from './constants';
import { userResults, userResultsError } from './actions';
import { apiGetUsers } from 'services/api';

// All sagas to be loaded
export default [
  defaultSaga,
  getUserList,
];

function mapUsers(users) {
  const userInfo = users.response.rows;
  return userInfo;
};


// Individual exports for testing
export function* defaultSaga() {
  console.log('default');
}

function apiCall(map) {

}

// Fetches a list of users
export function* getUserList () {
  while(true) {
    // Wait for the REQUEST_USERS action
    const info = yield take(ACTIONS.REQUEST_USERS);
    console.log(info);

    try {
      // Tell redux-saga to call fetch with the specified options
      const response = yield call(apiGetUsers, info.apiKey);
      console.log(response);
      // Get object from response
      const json = yield JSON.parse(response);
      const users = yield mapUsers(json);

      yield put(userResults(users));
    }
    catch (err) {
      // Send the error
      console.log('ERRRRRRORROROROR');
      console.log(err);
      yield put (userResultsError(err));
    }
  }
}
