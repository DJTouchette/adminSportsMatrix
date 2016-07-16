/*
 *
 * Purchases
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectPurchases from './selectors';
import styles from './styles.css';

export class Purchases extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.purchases}>
      This is Purchases container !
      </div>
    );
  }
}

const mapStateToProps = selectPurchases();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Purchases);
