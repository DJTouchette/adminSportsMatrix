/*
 *
 * Members
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectMembers from './selectors';
import styles from './styles.css';

export class Members extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.members}>
      This is Members container !
      </div>
    );
  }
}

const mapStateToProps = selectMembers();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Members);
