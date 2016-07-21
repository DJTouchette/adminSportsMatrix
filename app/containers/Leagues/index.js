/*
 *
 * Leagues
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectLeagues from './selectors';
import styles from './styles.css';
import { fetchingLeagues, updateLeagues, updateForm } from './actions';
import MakeStream from 'components/MakeStream';

export class Leagues extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    console.log(this.props);
    const api_key = this.props.user.activeUser.api_token;
    this.props.fetchLeagues(api_key);
  }

  handleSave() {
    const api_key = this.props.user.activeUser.api_token;
    // const field = this.props.leagues.
    // console.log(leagueName);
    console.log('IN LEAGUES');
    const field = [Object.keys(this.props.leagues.field[0])[0]][0];
    console.log(field);
    console.log(this.props.leagues.field[0]);
    const value = this.props.leagues.field[0][`${field}`];
    console.log(api_key);
    this.props.updateLeagues(api_key, field, value, this.props.leagues.field[0].id);
  }

  handleOnEdit(id, event) {
    console.log(this);
    // console.log(event);
    // console.log(id);
    // console.log('Handeling edit!');
    // console.log(event.target.value);
    this.props.updateForm(event.target.id, event.target.value, id);
  }

  render() {
    console.log(this.props);
    const leagues = this.props.leagues.leagues;

    if (leagues) {
      return (
        <MakeStream updateForm={this.handleOnEdit.bind(this)} save={this.handleSave.bind(this)} list={leagues} hey="ddededededd" />
      );
    }

    return (
      <div className={styles.leagues}>
      This is Leagues container !
      </div>
    );
  }
}

// const mapStateToProps = selectLeagues();

export function mapStateToProps(state) {
  return {
    leagues: state.get('leagues'),
    user: state.get('login'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    fetchLeagues: (apiKey) => dispatch(fetchingLeagues(apiKey)),
    updateLeagues: (api_key, field, value, id) => dispatch(updateLeagues(api_key, field, value, id)),
    updateForm: (field, value, id) => dispatch(updateForm(field, value, id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Leagues);
