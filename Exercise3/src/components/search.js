import React from 'react';
import styles from './search.module.css';

import OutputSearch from './OutputSearch';
export default function search(props) {

  return (
    <div>
      <div className={ styles.presentations }>
      {
        props.items.map(item => <OutputSearch key={item.id} {...item} />)
      }
      </div>
    </div>
  )
}
