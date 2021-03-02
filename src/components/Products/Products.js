import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import "./Products.css";



const Products = (props) => {
  const {img, name, price} = props.product;

  return (
    <div className="product-container">
      <div>
        <img src={img} alt=""/>
      </div>
      <h4>{name}</h4>
      <h6>${price}</h6>
      <button
        onClick={() => props.handleAddProduct(props.product)}
      ><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> Buy Now</button>
    </div>
  );
};

export default Products;