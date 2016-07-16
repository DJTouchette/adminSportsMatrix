/**
*
* Item
*
*/

import React from 'react';

import styles from './styles.css';

function Item(props) {
  return (
   <li className={props.className || styles.item}>
     <div className={styles.itemContent}>
       {props.item}
     </div>
   </li>
 );

}

Item.propTypes = {
  className: React.PropTypes.string,
  item: React.PropTypes.any,
};

export default Item;
