/*
 *
 * Events
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectEvents from './selectors';
import styles from './styles.css';

export class Events extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.events}>
      This is Events container !
      </div>
    );
  }
}

const mapStateToProps = selectEvents();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Events);
