import React, { useEffect, useState } from "react";
import axios from 'axios';
import ProductCard from "./ProductCard";
import './CardsContainer.css';

function CardsContainer() {
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios({
      url: 'https://dummyjson.com/products'
    })
    .then((response) => {
      setProducts(response.data.products);
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])


  return (
    <div className="cards-container">
      {products.map((product) => (
        <ProductCard
          thumbnail={product.thumbnail}
          title={product.title}
          discountPercentage={product.discountPercentage}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default CardsContainer;