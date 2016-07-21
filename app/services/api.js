import XMLHttpRequestPromise from 'xhr-promise';

const apiKey = 'thesportsmatrixADMIN';
const EMAIL = 'email';
const PASSWORD = 'password';
const API_BASE = ' http://thesportsmatrix.com/api';
const API_FIELD = '?api_token=';
const VERSION = '/v1';

export const API_URL = {

  login: API_BASE + '/login',
  leagues: API_BASE + VERSION + '/leagues',
  customerInfo: API_BASE + VERSION + '/customers_info',
  operations: API_BASE + VERSION + '/operations'
};

export function getToken() {
  const usersToken = window.localStorage.getItem(apiKey);
  return usersToken;
}

export function makeToken(token) {
  console.log('adding token');
  const addedToken = window.localStorage.setItem(apiKey, token);
  return addedToken;
}

// Create Default Headers
function defaultHeaders() {
  let headers = new Headers();
  headers.append('Access-Control-Allow-Credentials', true);
  headers.append('Access-Control-Allow-Headers','x-requested-with');
  headers.append('X-Requested-With','XMLHttpRequest');
  headers.append('Origin', 'http://localhost:62102');
  headers.append('Access-Control-Allow-Origin', true);
  headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT');
  headers.forEach((item) => {
    console.log(item);
  });

  return headers;
}

// POST initialization
function optsPost(formData, headers, url) {
  const init = {
    method: 'POST',
    credentials: 'include',
    params: formData,
    headers: headers,
    url: url,
  };
    return init;
}

function optsUpdate(headers, url, data) {
  const init = {
    method: 'UPDATE',
    credentials: 'include',
    headers: headers,
    url: url,
    params: data,
  };
  return init;
}

function optsGet(headers, url) {
  const init = {
    method: 'GET',
    credentials: 'include',
    headers: headers,
    url: url,
    }
  return init;
}

// function apiFetch (url, init) {
//   const apiCall = fetch(url, init)
//     .then((result) => {
//       return result.json();
//     })
//     .then((json) => {
//       return json;
//     });
//
//     return apiCall;
// }

//Routes

// Login Request
export function apiLogin(email, password) {
  const headers = defaultHeaders();
  // Form data object
  let formData = new FormData();
  formData.append(EMAIL, email);
  formData.append(PASSWORD, password);

  const init = optsPost(formData, headers, API_URL.login);
  const json = apiFetch(init);
  return json;
}


// This method expects form data
export function apiFetch (opts) {
  const request = new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open(opts.method, opts.url, true);
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        console.log(xhr.response);
        resolve(xhr.response);
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };
    if (opts.headers) {
      Object.keys(opts.headers).forEach(function (key) {
        xhr.setRequestHeader(key, opts.headers[key]);
      });
    }
    const params = opts.params;
    xhr.withCredentials = true;
    xhr.send(params);
  }).then( (hello) => {
    return hello;
  });
  return request;
}

// GET Leagues
export function apiGetLeagues(apiKey) {
  const headers = defaultHeaders();
  const url = API_URL.leagues + API_FIELD + apiKey;
  // Form data object
  const init = optsGet(headers, url);
  console.log(init);
  const json = apiFetch(init);
  return json;
}

export function apiGetUsers(apiKey) {
  const headers = defaultHeaders();
  const url = API_URL.customerInfo + API_FIELD + apiKey;
  // Form data object
  const init = optsGet(headers, url);
  console.log(init);
  const json = apiFetch(init);
  return json;
}

export function apiGetOperations(apiKey) {
  const headers = defaultHeaders();
  const url = API_URL.operations + API_FIELD + apiKey;
  // Form data object
  const init = optsGet(headers, url);
  console.log(init);
  const json = apiFetch(init);
  return json;
}

//UPDATE League
export function apiUpdateLeagues(apiKey, field, value, id) {
  let formData = new FormData();
  formData.append(field, value);
  const headers = defaultHeaders();
  // const url = API_URL.leagues +`/${id}` + API_FIELD + apiKey;
  const url = 'http://thesportsmatrix.com/api/v1/leagues/1?api_token=ZMH1xg1qtr0pYAXqdTzJDpvXFsOwG3xQmVp4TgfTm1WFXEQacg189IBFFh7H&name=noNFL';
  // Form data object
  const init = optsUpdate(headers, url, formData);
  console.log(init);
  const json = apiFetch(init);
  return json;
}
