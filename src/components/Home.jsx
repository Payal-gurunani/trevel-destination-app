import React from 'react'

const Home = ({onRandomClick, onSearchClick}) => {
  return (
    <div>
      <h1>Travel Destination Inspiration</h1>
      <button onClick={onRandomClick}>
        Random Destination
      </button>
      <button onClick={onSearchClick}>
        Search by interest
      </button>
    </div>
  )
}

export default Home
