import React from "react";
import styles from './Header.module.css';
import "./Header.css";
/* This component is created to rendering the Title of the app */

const Header = props => {
  return <div className="test">
    <h1 className={styles.head1}>{ props.applicationName }</h1>
    <h2 className={styles.head2}>{ props.applicationDescription }</h2>
  </div>
}
export default Header;