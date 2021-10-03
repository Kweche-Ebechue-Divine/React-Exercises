import React from "react";
import styles from './ShoppingItems.module.css';
import cx from 'classnames';

/* A Component for the Shopping list items */
const ShoppingItems = props => {
  return <li className={ cx(styles.flex, styles.tem) }>
    <div className={ cx(styles.flux, styles.Unit) }>
       <div> { props.qty }</div>
      <div> { props.unit }</div>
      <div> { props.unit }</div>
      <div> { props.value} </div>
    </div>
        </li>
}

export default ShoppingItems;