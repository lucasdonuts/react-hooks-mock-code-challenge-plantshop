import React, { useState } from "react";

function NewPlantForm({ addNewPlant }) {
  const initialState = {
    name: '',
    image: '',
    price: ''
  }
  const [formData, setFormData] = useState(initialState)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    addNewPlant(formData);

    setFormData(initialState);
  }

  console.log(formData)

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={ handleSubmit } >
        <input
          onChange={ handleChange }
          type="text"
          name="name"
          placeholder="Plant name"
          value={ formData.name }
        />
        <input
          onChange={ handleChange }
          type="text"
          name="image"
          placeholder="Image URL"
          value={ formData.image }
        />
        <input
          onChange={ handleChange }
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={ formData.price }
        />
        <button
          type="submit"
        >
          Add Plant
        </button>
      </form>
    </div>
  );
}

export default NewPlantForm;
