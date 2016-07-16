/**
*
* Nav
*
*/

import React from 'react';
import { Link } from 'react-router';

import styles from './styles.css';

function Nav(props) {
  console.log(props);
  const content = props.links.map((item, index) => (
    <li key={`item-${index}`}><Link to={item} key={`item-${index}`}>{props.title[index]}</Link></li>
  ));
    return (
      <div id={styles.nav}>
        <ul className="">
          {content}
        </ul>
      </div>
    );
}

export default Nav;
