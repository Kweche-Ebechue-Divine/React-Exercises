import React from "react";
import ShoppingItems from './ShoppingItems';

const Shopping = props => {
  return <ul>
    {
      props.items.map (i => <ShoppingItems {...i} key={ i.id }/>)
    }
  </ul>

}

export default Shopping;