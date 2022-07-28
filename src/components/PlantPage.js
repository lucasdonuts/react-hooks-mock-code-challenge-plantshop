import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState('');

  useEffect( () => {
    fetch('http://localhost:6001/plants')
      .then( res => res.json() )
      .then( setPlants )
  }, [])

  const addNewPlant = (newPlant) => {
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPlant)
    })
    .then( res => res.json() )
    .then( addedPlant => setPlants([
      ...plants,
      addedPlant
    ]) )
  }

  const deletePlant = (plantToDelete) => {
    fetch(`http://localhost:6001/plants/${plantToDelete.id}`,{ method: 'DELETE' })
    .then( setPlants( prev => prev.filter( plant => plant !== plantToDelete )))
  }

  const updatePlant = (plantToUpdate) => {
    console.log(plantToUpdate)
    fetch(`http://localhost:6001/plants/${plantToUpdate.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        price: plantToUpdate.price
      })
    })
    .then( updatedPlant => console.log( updatedPlant ) )
  }

  const handleSearch = (searchString) => {
    setSearch(searchString);
  }

  const plantsToDisplay = plants.filter( plant => plant.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <main>
      <NewPlantForm addNewPlant={ addNewPlant } />
      <Search handleSearch={ handleSearch } />
      <PlantList plants={ plantsToDisplay } deletePlant={ deletePlant } updatePlant={ updatePlant } />
    </main>
  );
}

export default PlantPage;
