import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ deletePlant, plants }) {
  const plantComponents = plants.map( plant => {
    return(
      <PlantCard key={ plant.id } plant={ plant } deletePlant={ deletePlant } />
    )
  })

  return (
    <ul className="cards">
      { plantComponents }
    </ul>
  );
}

export default PlantList;
