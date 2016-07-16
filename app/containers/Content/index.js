/*
 *
 * Content
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectContent from './selectors';
import styles from './styles.css';

export class Content extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.content}>
      This is Content container !
      </div>
    );
  }
}

const mapStateToProps = selectContent();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
