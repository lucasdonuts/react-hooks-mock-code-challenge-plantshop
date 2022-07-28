import React, { useState, useEffect } from 'react';

const PriceUpdateForm = ({ plantToUpdate, handleUpdate }) => {
  const [price, setPrice] = useState(1.00);

  useEffect( () => {
    setPrice(prev => plantToUpdate.price)
  }, [ plantToUpdate ])

  const handleChange = (e) => {
    setPrice( prev => parseFloat(e.target.value, 2) )
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    plantToUpdate.price = price;

    handleUpdate(plantToUpdate);
  }

  return (
    <>
      <form onSubmit={ handleSubmit }>
        <input
          type='number'
          name='price'
          step='0.01'
          value={ price }
          onChange={ handleChange }
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default PriceUpdateForm;