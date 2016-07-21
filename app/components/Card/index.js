/**
*
* Card
*
*/

import React from 'react';
import styles from './styles.css';

function Card(props) {

  const content = props.msg.map((item, index) => {
    return <p>{item}</p>
  });
  return (
      <div className={`${styles.fromtop} ${styles.gridItem}`}>
        <div className="">
          <div className="">
            <div className="card">
              <div className="card-content">
                <span className="card-title">Admin</span>
                {content}
              </div>
              <div className="card-action">
                <a className="waves-effect waves-teal btn-flat teal white-text" onClick={props.handleEdit} user={props.item.id}>Edit</a>
                <a className="waves-effect waves-teal btn-flat teal white-text" user={props.item.id}>Delete</a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
// onClick={this.props.handleEdit}
export default Card;
