import React from 'react'

const DestinationDetails = ({destination}) => {
    if(!destination) return null;
  return (
    <div>
      <h2>{destination.name}</h2>
      <p>{destination.descrption}</p>
      <img src={destination.image} alt={destination.name} />
    </div>
  );
}

export default DestinationDetails
