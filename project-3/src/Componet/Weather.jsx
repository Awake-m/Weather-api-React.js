// import React from 'react'

// import './style.css'

// function Weather() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Weather



// src/Weather.js
import React, { useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  

  

  const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

  const fetchWeather = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={fe84db1ffdfb5224878b4743ed849944}`);
      setWeather(response.data);
      setError('');
    } catch (error) {
      setError('City not found. Please enter a valid city name.');
      setWeather(null);
    }
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <div className="container">
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">Enter City Name:  </label>
          <input type="text" className="form-control" id="city" value={city} onChange={handleChange} required />
        </div><br></br><br></br>
        <button type="submit" className="btn btn-primary">Get Weather</button>
      </form>
      
      {error && <p className="text-danger mt-3">{error}</p>}

      {weather && (
        <div className="mt-3">
          <h2>Weather in {weather.name}, {weather.sys.country}</h2>
          <p>Temperature: {weather.main.temp} &deg;C</p>
          <p>Description: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
