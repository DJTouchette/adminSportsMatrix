/*
 *
 * Operations
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectOperations from './selectors';
import styles from './styles.css';
import { fetchingOperations } from './actions';

import UserCard from 'components/UserCard';
import Loading from 'components/Loading';
import MakeStream from 'components/MakeStream';

export class Operations extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = { userList: [], };
  }

  componentDidMount() {
    this.props.getOperations(this.props.user.activeUser.api_token);
  }

  handleSave() {
    console.log('in operations!!');
  }

  handleOnEdit(event) {
    console.log(this);
    console.log('Handeling edit!');
    console.log(event.target.value);
    this.props.updateForm(event.target.id, event.target.value);
  }

  render() {
    const operations = this.props.operations.operationsList;
    console.log(this.props);
    if (operations) {

      return (
        <div>
          <h1 className="center">This is Operations container !</h1>
          <div className={styles.flexContainer}>
              <MakeStream updateForm={this.handleOnEdit.bind(this)} save={this.handleSave.bind(this)} list={operations} />
          </div>
        </div>
      );
    }

    return (
      <div className="container row center">
        <h1>This is Operations container ! </h1>
        <Loading />
      </div>
    );
  }

}


// const mapStateToProps = selectOperations();

function mapStateToProps(state) {
  console.log(state);
  return {
    state: state,
    operations: state.get('operations'),
    user: state.get('login')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getOperations: (apiKey) => dispatch(fetchingOperations(apiKey)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Operations);
