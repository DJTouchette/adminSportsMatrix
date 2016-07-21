/**
*
* Menu
*
*/

import React from 'react';
import styles from './styles.css';
import { Link } from 'react-router';

class Menu extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
  }
  componentWillMount() {

    }

  render() {
    return (
      <div>
        <Link to="/menu" className={`${styles.hamburger} ${this.props.style}`}>&#9776;</Link>
      </div>
    );
  }
}

export default Menu;
