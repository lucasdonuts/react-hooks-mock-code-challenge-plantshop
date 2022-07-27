import React, { useState } from "react";

function PlantCard({ plant, deletePlant }) {
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
      <span className='button-area'>
        {inStock ? (
          <button onClick={ toggleSoldOut } className="primary">In Stock</button>
        ) : (
          <button onClick={ toggleSoldOut } >Out of Stock</button>
        )}
        <button onClick={ () => deletePlant(plant) } className="delete" >Delete Plant</button>
      </span>
    </li>
  );
}

export default PlantCard;
