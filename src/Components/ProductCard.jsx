import React from "react";
import './ProductCard.css';

function ProductCard(props) {

  return (
    <div>
      <div className="product-card">
        <div className="product-card-upper-section">
          <img className="product-thumbnail" src={props.thumbnail} alt="product image" />
        </div>
        <div className="product-card-lower-section">
          <span className="product-title">{props.title.length > 30 ? `${props.title.slice(0, 35)}...` : props.title}</span>
          <span className="product-discount-percentage">{props.discountPercentage}% OFF</span>
          <span className="product-price">${props.price}</span>
          <button className="btn-addToCart">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;