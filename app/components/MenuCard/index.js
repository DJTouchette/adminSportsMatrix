/**
*
* Card
*
*/

import React from 'react';
import { Link } from 'react-router';
import styles from './styles.css';

function Card(props) {
  return (
    <Link to={props.link}>
      <div onClick={props.closeMenu} className={`${styles.fromtop} ${styles.gridItem} `}>
        <div className="">
          <div className="">
            <div className="card">
              <div className="card-content">
                <span className="card-title">{props.title}</span>
              </div>
              <div className="card-action">
              </div>
            </div>
          </div>
        </div>
      </div>
      </Link>
  );
}
// onClick={this.props.handleEdit}
export default Card;
