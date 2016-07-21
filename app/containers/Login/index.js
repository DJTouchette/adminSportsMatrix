/*
 *
 * Login
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectLogin from './selectors';
import HomePage from 'containers/HomePage';
import styles from './styles.css';
import LoginForm from 'components/LoginForm';

import { getToken, makeToken } from 'services/api';

import { fetchingLogin, updateForm, addApiKey } from './actions';

export class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const token = getToken();

    if (token) {
      this.setState({ signedIn: true });
      this.props.storeKey(token);
      return;
    }
      this.setState({ signedIn: false });
  }

  handleLogin() {
    const user = this.props.user;
    const ctx = this;
    this.props.login(user.email, user.password, ctx );
  }

  handleOnEdit(event) {
    this.props.updateForm(event.target.id, event.target.value);
}

testing() {
  console.log("haaaaaay");
}

  render() {
    console.log(this.props);
    if (this.state.signedIn) {
      return (
        <HomePage msg={this.state.msg} />
      );
    }

    return (
      <div className={styles.login}>
        <LoginForm err={this.state.err} updateForm={this.handleOnEdit.bind(this)} login={this.handleLogin.bind(this)}/>
      </div>
    );
  }
}

// const mapStateToProps = selectLogin();

export function mapStateToProps(state) {
  return {
    state: state,
    user: state.get('login'),
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    login: (email, password, ctx) => dispatch(fetchingLogin(email, password, ctx)),
    updateForm: (name, value) => dispatch(updateForm(name, value)),
    storeKey: (apiKey) => dispatch(addApiKey(apiKey)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
