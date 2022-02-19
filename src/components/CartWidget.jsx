import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';


const CartWidget = () => {
  return (
    <div>
       <a href="/" style={{color:'ButtonFace'}}> 
       <FontAwesomeIcon icon={faShoppingCart} className="CartLogo"/>
       </a>
    </div>
  );
};

export default CartWidget;
