// import React from 'react'

// import './style.css'

// function Weather() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Weather

// Weather.js

import React, { useState } from 'react';
import './style.css';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = 'fe84db1ffdfb5224878b4743ed849944'; 

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error('Weather data not available for that city.');
      }
      const data = await response.json();
      setWeather({
        description: data.weather[0].description,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        windSpeed: data.wind.speed
      });
      setError(null);
    } catch (error) {
      setError(error.message);
      setWeather(null);
    }

   
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== '') {
      fetchWeather();
    }

  };
  console.log(weather)

  return (
    <div className="weather-container"><br></br>
      <h2>Weather App</h2><br></br>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
       
      
        <button type="submit">Search</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {weather && (
        <div className="weather-info">
          <p>City:<br/> {city}</p>
          <p>Description:<br/> {weather.description} </p>
          <p>Temperature: {weather.temperature}°C</p>
          <p>Humidity:<br/> {weather.humidity}%</p>
          <p>Pressure:<br/> {weather.pressure} hPa</p>
          <p>Wind Speed:<br/> {weather.windSpeed} m/s</p>
        </div>
      )}

      <h4>Coudly condition form 5pm-7pm with,,<br/>partly cloudy condition expected at 7pm.</h4><br/>
      <hr></hr><br/>
      <div className='box3'>
        <div className='box33'></div>
        <div className='box33'></div>
        <div className='box33'></div>
        <div className='box33'></div>
        <div className='box33'></div>
      </div>
      
    </div>
  );
};

export default Weather;


