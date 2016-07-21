/*
 *
 * Handicappers
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectHandicappers from './selectors';

export class Handicappers extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      This is Handicappers container !
      </div>
    );
  }
}

const mapStateToProps = selectHandicappers();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Handicappers);
