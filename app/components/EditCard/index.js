/**
*
* EditCard
*
*/

import React from 'react';

import styles from './styles.css';

function EditCard(props) {
  let i = 0;
  const content = props.edit.map((item, index) => {
    i ++;
    console.log('in looooop');
    console.log(props.edit[0]);
    return(
    <div>
      <input onKeyUp={props.updateForm.bind(this, 1)} key={index} defaultValue={item} id={props.editKeys[i - 1]} type="text" className="validate"/>
      <label htmlFor={item}>{props.editKeys[i - 1]}</label>
    </div>
  );
  });
  return (
    <div className={`${styles.fromtop} ${styles.flexItem}`} >
      <div className="">
        <div className="">
          <div className="card">
            <div className="card-content">
              <span className="card-title">Admin</span>
                {content}
            </div>
            <div className="card-action">
            <div className="row">
              <a className="waves-effect waves-teal btn-flat teal white-text" onClick={props.backClick}>Back</a>
              <a className="waves-effect waves-teal btn-flat teal white-text" onClick={props.save}>Save</a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditCard;
