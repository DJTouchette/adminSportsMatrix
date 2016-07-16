import { take, call, put, select } from 'redux-saga/effects';
import { ACTIONS, API_URL } from './constants';
import { userResults, userResultsError } from './actions';

// All sagas to be loaded
export default [
  defaultSaga,
  getUserList,
];

function mapUsers(users) {
  const userInfo = users.map( function(user) {
    return {
      id: user.id,
      username: user.username
    };
  });
  return userInfo;
};


// Individual exports for testing
export function* defaultSaga() {
  console.log('default');
}

// Fetches a list of users
export function* getUserList () {
  while(true) {
    // Wait for the REQUEST_USERS action
    yield take(ACTIONS.REQUEST_USERS);

    try {
      // Tell redux-saga to call fetch with the specified options
      const response = yield call(fetch, API_URL.users, { method: 'GET' });
      // Get object from response
      const json = yield response.json();
      const users = yield mapUsers(json);

      yield put(userResults(users));
    }
    catch (err) {
      // Send the error
      console.log('ERRRRRRORROROROR');
      yield put (userResultsError(err));
    }
  }
}
