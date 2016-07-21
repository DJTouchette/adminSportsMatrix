/**
*
* LoginForm
*
*/

import React from 'react';

import styles from './styles.css';

function LoginForm(props) {
  return (
    <div className={`${styles.loginForm} ${styles.centered} container`}>
      <div className="card">
        <div className="card-content">
          <span className="card-title">Login</span>
          <div className="col s12 m12">
            <input onKeyUp={props.updateForm} placeholder="Email" name="email" id="email" type="text" className="validate"/>
          </div>
          <div className="col s12 m12">
            <input onKeyUp={props.updateForm} placeholder="Password" id="password" type="text" className="validate"/>
            {props.err}
          </div>
          <div>
            <a onClick={props.login} className="waves-effect waves-light btn center">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
