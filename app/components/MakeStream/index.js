/**
*
* MakeStream
*
*/

import React from 'react';
import UserCard from 'components/UserCard';
import styles from './styles.css';

function MakeStream(props) {
  const stream = props.list.map((user, index) => {
    let content = [];
    let edit = [];
    let editKeys = [];
    const userKeys = Object.keys(user);
    for (let i = 0; i < userKeys.length; i++) {
      editKeys.push(userKeys[i]);
      content.push(`${[userKeys[i]]}: ${user[userKeys[i]]}`);
      edit.push(user[userKeys[i]]);

    }
    return <UserCard updateForm={props.updateForm} save={props.save} className={styles.gridItem} editKeys={editKeys} edit={edit} msg={content} item={user} key={index}/>
  });
  return (
    <div className={styles.flexContainer}>
      {stream}
    </div>
  );
}

export default MakeStream;
