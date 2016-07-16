/**
*
* Card
*
*/

import React from 'react';

import styles from './styles.css';

function Card(props) {
  return (
    <div className={styles.card}>
    <div className="">
      <div className="col s12 m4">
        <div className="card">
          <div className="card-content">
            <span className="card-title">Admin</span>
            <p>{props.item}</p>
          </div>
          <div className="card-action">
            <a className="waves-effect waves-teal btn-flat">Edit</a>
            <a className="waves-effect waves-teal btn-flat">Delete</a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Card;
