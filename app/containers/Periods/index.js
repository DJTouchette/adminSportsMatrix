/*
 *
 * Periods
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectPeriods from './selectors';
import styles from './styles.css';

export class Periods extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.periods}>
      This is Periods container !
      </div>
    );
  }
}

const mapStateToProps = selectPeriods();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Periods);
