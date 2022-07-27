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
      addedPlant,
      ...plants
    ]) )
  }

  const plantsToDisplay = plants.filter( plant => plant.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <main>
      <NewPlantForm addNewPlant={ addNewPlant } />
      <Search search={ search } setSearch={ setSearch } />
      <PlantList plants={ plantsToDisplay }/>
    </main>
  );
}

export default PlantPage;
