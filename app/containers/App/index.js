/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Link } from 'react-router';
import Menu from 'components/Menu';
import { mapStateToProps, mapDispatchToProps } from 'containers/Login';
import { connect } from 'react-redux';
import styles from './styles.css';

import { getToken, makeToken } from 'services/api';

export default class App extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  componentWillMount() {
    const hasToken = getToken();

    if (!hasToken) {
      this.props.history.push('/login');
      return;
      }
    }

    handleClick() {
    }

  render() {

      return (
        <div className={styles.container}>
          <Menu />
          <div className={`container ${styles.main}`}>
            {this.props.children}
          </div>
        </div>
      );
  }
}
