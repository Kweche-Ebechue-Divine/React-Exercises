import React from 'react';
import styles from './OutputSearch.module.css';

export default function OutputSearch(props) {
  return (
    <div className={ styles.output }>
        <div>
  <div><img src={`/images/${props.image}`}/></div>
             <div className={ styles.name }>{ props.name }</div>
               <div>Euros{ props.price }</div>
               <div>{ props.color }</div>
                 <div>{ props.description }</div>
                  </div>
                </div>
            )
            }
