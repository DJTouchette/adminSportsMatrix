/*
 *
 * Picks
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectPicks from './selectors';
import styles from './styles.css';

export class Picks extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.picks}>
      This is Picks container !
      </div>
    );
  }
}

const mapStateToProps = selectPicks();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Picks);
