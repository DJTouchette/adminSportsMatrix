import { take, call, put, select } from 'redux-saga/effects';
import { ACTIONS } from './constants';
import { apiGetOperations } from 'services/api';
import { operationResults } from './actions';

// All sagas to be loaded
export default [
  defaultSaga,
  getOperaionsList,
];

// Individual exports for testing
export function* defaultSaga() {

}

function mapUsers(users) {
  const userInfo = users.response.rows;
  return userInfo;
};


export function* getOperaionsList() {
  while(true) {
    // Wait for the REQUEST_USERS action
    const info = yield take(ACTIONS.REQUEST_OPERATIONS);
    console.log(info);

    try {
      // Tell redux-saga to call fetch with the specified options
      const response = yield call(apiGetOperations, info.apiKey);
      console.log(response);
      // Get object from response
      const parsedJson = yield JSON.parse(response);
      console.log(parsedJson);
      const operations = parsedJson.response.rows;
      console.log(operations);
      yield put(operationResults(operations));
    }
    catch (err) {
      // Send the error
      console.log('ERRRRRRORROROROR');
      console.log(err);
      // yield put (userResultsError(err));
    }
  }
}
