import React, { useState } from "react";
import PriceUpdateForm from './PriceUpdateForm';

function PlantCard({ plant, deletePlant, updatePlant }) {
  const { name, image, price } = plant;
  const [inStock, setInStock] = useState(true);
  const [editingPrice, setEditingPrice] = useState(false);
  const [plantToUpdate, setPlantToUpdate] = useState();

  const toggleSoldOut = () => {
    setInStock( prev => !prev )
  }

  const handleEditClick = () => {
    setPlantToUpdate( prev => plant )
    setEditingPrice( prev => !prev )
  }

  const handleUpdate = (plantToUpdate) => {
    updatePlant(plantToUpdate);
    
    setEditingPrice( prev => !prev );
  }

  const priceDisplay = editingPrice
    ? <PriceUpdateForm plantToUpdate={ plantToUpdate } handleUpdate={ handleUpdate } />
    : <p>Price: ${ price }</p>

  return (
    <li className="card">
      <img src={ image } alt={ name } />
      <h4>{ name }</h4>
      <span className='button-area'>
        { priceDisplay }
        <small className='edit' onClick={ handleEditClick }>
          { editingPrice ? 'Cancel' : 'Edit Price' }
        </small>
      </span>
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
