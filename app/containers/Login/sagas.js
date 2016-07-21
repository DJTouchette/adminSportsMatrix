import { take, call, put, select } from 'redux-saga/effects';
import { ACTIONS } from './constants';
import { API_URL, apiLogin, makeToken } from '../../services/api';
import { loginResultsError, loginResults } from './actions';
// All sagas to be loaded
export default [
  defaultSaga,
  login
];

// Individual exports for testing
export function* defaultSaga() {

}

function mapActiveUser(response) {
  console.log('in map');
  console.log(response);
  return response.response.rows[0];
}

// Fetches a list of users
export function* login () {
  while(true) {
    console.log('in saga');
    // Wait for the REQUEST_USERS action
    //Hard coded for dev
    const info = yield take(ACTIONS.REQUEST_LOGIN);
    console.log(info);
    let formData = new FormData();
     formData.append('email', 'djtouchette1993@gmail.com');
     formData.append('password', 'password123');
    try {
      console.log('SAGA TIME');
      const options = {
        method: 'POST',
        url: API_URL.login,
        params: formData,
      };
      // Tell redux-saga to call fetch with the specified options
      const response = yield call(apiLogin, 'djtouchette1993@gmail.com', 'password123');
      const parseJson = yield JSON.parse(response);
      const activeUser = yield mapActiveUser(parseJson);

      yield put(loginResults(activeUser));
      const addToken = yield makeToken(activeUser.api_token);
      yield info.ctx.setState({signedIn: true, err: false, msg: `You have been logged in.`});
    }
    catch (err) {
      // Send the error
      console.log('ERRROR');
      console.log(err);
      yield put (loginResultsError(err));
      yield info.ctx.setState({err: "Wrong Username/Password" , signedIn: false});
    }
  }
}
