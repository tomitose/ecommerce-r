import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const CartWidget = () => {
  return (
      <Link to={"/cart>"}> 
        <a href="/" style={{color:'ButtonFace'}}> 
        <FontAwesomeIcon icon={faShoppingCart} className="CartLogo"/>
        </a>
       </Link>
  );
};

export default CartWidget;
