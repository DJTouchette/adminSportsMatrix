import { take, call, put, select } from 'redux-saga/effects';
import { ACTIONS } from './constants';
import { apiGetLeagues, apiUpdateLeagues } from '../../services/api';
import { addingLeagues, updateLeagues } from './actions';

// All sagas to be loaded
export default [
  defaultSaga,
  GetLeagues,
  updateLeague
];

// Individual exports for testing
export function* defaultSaga() {

}

function mapLeagues(response) {
  console.log(response);
  const leagues = response.response.rows.map((item, index) => {
    return item;
  });
  return leagues;
}

export function* GetLeagues() {
  while(true) {
    console.log('in saga Leagues');
    // Wait for the REQUEST_USERS action
    const info = yield take(ACTIONS.FETCH_LEAGUES);
    console.log(info);
    try {
      console.log('SAGA TIME');
      // Tell redux-saga to call fetch with the specified options
      const response = yield call(apiGetLeagues, info.apiKey);
      console.log(response);
      const fromJson = yield JSON.parse(response);
      const leagues = yield mapLeagues(fromJson);
      yield put(addingLeagues(leagues));
      // console.log(activeUser);
      // yield put(loginResults(activeUser));
      // const addToken = yield makeToken(activeUser.api_token);
      // yield info.ctx.setState({signedIn: true, err: false, msg: `You have been logged in.`});
    }
    catch (err) {
      // Send the error
      console.log('ERRROR');
      console.log(err);
      // yield put (loginResultsError(err));
      // yield info.ctx.setState({err: "Wrong Username/Password" , signedIn: false});
    }
  }
}

export function* updateLeague() {
  while(true) {
    // Wait for the REQUEST_USERS action
    const info = yield take(ACTIONS.UPDATE_LEAGUES);
    console.log(info);
    try {
      // Tell redux-saga to call fetch with the specified options
      const response = yield call(apiUpdateLeagues, info.apiKey, info.field, info.value, info.id);
      // Get object from response
      const json = yield response.json();
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
