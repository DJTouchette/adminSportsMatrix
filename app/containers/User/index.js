/*
 *
 * User
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectUser from './selectors';
import styles from './styles.css';
import { createStructuredSelector } from 'reselect';
import UserCard from 'components/UserCard';
import Loading from 'components/Loading';
import MakeStream from 'components/MakeStream';

/*
 * Actions
 */
import { fetchingUsers, updateForm } from './actions';

export class User extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = { userList: [], };
  }

  componentDidMount() {
    this.props.getUsers(this.props.user.activeUser.api_token);
  }

  handleSave() {
    console.log('in user!!');
  }

  handleOnEdit(event) {
    console.log(this);
    console.log('Handeling edit!');
    console.log(event.target.value);
    this.props.updateForm(event.target.id, event.target.value);
  }

  render() {
    const users = this.props.userList.users;
    console.log(this.props);
    if (users) {

      return (
        <div>
          <h1 className="center">This is User container ! </h1>
          <div className={styles.flexContainer}>
              <MakeStream updateForm={this.handleOnEdit.bind(this)} save={this.handleSave.bind(this)} list={users} />
          </div>
        </div>
      );
    }

    return (
      <div className="container row center">
        <h1>This is User container ! </h1>
        <Loading />
      </div>
    );
  }
}

// const mapStateToProps = selectUser();

function mapStateToProps(state) {
  console.log(state);
  return {
    state: state,
    userList: state.get('user'),
    user: state.get('login')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getUsers: (apiKey) => dispatch(fetchingUsers(apiKey)),
    updateForm: (name, value) => dispatch(updateForm(name, value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
