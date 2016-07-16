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
import Item from 'components/Item';
import Card from 'components/Card';
import Loading from 'components/Loading';
/*
 * Actions
 */
import { fetchingUsers } from './actions';

export class User extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = { userList: [], };
  }

  componentDidMount() {
    this.props.getUsers();
  }

  componentWillUpdate() {
    // this.props.userList !== undefined;
  }

  componentWillUnmount() {
    // console.log(this.props);
  }

  render() {
    // console.log(this.props);
    const users = this.props.userList.users;

    if (users) {
      const userList = users.map((user, index) => {
        return <Card item={`Username: ${user.username} ${'\n'} ID: ${user.id}`} key={index}/>
      });

      return (
        <div className="container row center">
          <h1>This is User container ! </h1>
            {userList}
        </div>
      )
    }
    // this.state.list = this.props.getUsers();
    return (
      <div className={styles.user}>
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
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getUsers: () => dispatch(fetchingUsers()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
