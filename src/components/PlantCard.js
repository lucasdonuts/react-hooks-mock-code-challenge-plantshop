import React, { useState } from "react";

function PlantCard({ plant }) {
  const { name, image, price } = plant;
  const [inStock, setInStock] = useState(true);

  const toggleSoldOut = () => {
    setInStock( prev => !prev )
  }

  return (
    <li className="card">
      <img src={ image } alt={ name } />
      <h4>{ name }</h4>
      <p>Price: { price }</p>
      {inStock ? (
        <button onClick={ toggleSoldOut } className="primary">In Stock</button>
      ) : (
        <button onClick={ toggleSoldOut } >Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
