// src/components/RandomDestination.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function RandomDestination() {
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRandomDestination() {
      setLoading(true);
      try {
        // Step 1: Get a random location name
        const locations = ["Paris", "London", "Tokyo", "New York", "Sydney"];
        const randomLocation = locations[Math.floor(Math.random() * locations.length)];

        // Step 2: Fetch an image from Unsplash
        const imageResponse = await axios.get(
          `https://api.unsplash.com/photos/random?query=${randomLocation}&client_id=zuMduB0wPoIl939f8dOdpcx2bUvuoccznpu1bUp4D_k`
        );
        const imageUrl = imageResponse.data.urls.regular;

        // Step 3: Fetch weather data from OpenWeatherMap
        const weatherResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${randomLocation}&appid=a6736fd3cb5f5bef773b6047f02c7a71`
        );
        const weatherData = weatherResponse.data.weather[0].description;

        // Step 4: Set the destination state with the fetched data
        setDestination({
          name: randomLocation,
          image: imageUrl,
          weather: weatherData,
        });
      } catch (error) {
        console.error("Error fetching destination data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchRandomDestination();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {destination ? (
        <div>
          <h2>{destination.name}</h2>
          <p>Weather: {destination.weather}</p>
          <img src={destination.image} alt={destination.name} />
        </div>
      ) : (
        <p>No destination found.</p>
      )}
    </div>
  );
}

export default RandomDestination;
