
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
          <p>City:<br/><i class="fa-solid fa-city"></i><br/> {city}</p>
          <p>Description:<br/><i class="fa-solid fa-audio-description"></i> <br/>{weather.description} </p>
          <p>Temperature:<br/><i class="fa-solid fa-temperature-high"></i><br/>{weather.temperature}°C</p>
          <p>Humidity:<br/><i class="bi bi-droplet-half"></i> <br/>{weather.humidity}%</p>
          <p>Wind Speed:<br/><i class="fa-solid fa-wind"></i><br/>{weather.windSpeed} m/s</p>
        </div>
      )}

      <h4>Coudly condition form 5pm-7pm with,,<br/>partly cloudy condition expected at 7pm.</h4><br/>
      <hr></hr>
      <div className='box3'>
        <div className='box33'>
          <h5>Mon</h5>
          <i class="fa-solid fa-cloud" style={{color: 'skyblue', marginTop : '10px'}}></i>
          <h5>22°</h5>
        </div>
        <div className='box33'>
          <h5>Tue</h5>
        <i class="fa-solid fa-cloud-sun" style={{color: 'orange', marginTop : '10px'}}></i>
        <h5>30°</h5>
        </div>
        <div className='box33'>
          <h5>Wed</h5>
        <i class="fa-solid fa-cloud-rain" style={{color: 'skyblue', marginTop : '10px'}}></i>
        <h5>20°</h5>
        </div>
        <div className='box33'>
          <h5>Thu</h5>
        <i class="fa-solid fa-cloud-showers-water" style={{color: 'skyblue', marginTop : '10px'}}></i>
        <h5>21°</h5>
        </div>
        <div className='box33'>
          <h5>Fri</h5>
          <i class="fa-solid fa-cloud-bolt" style={{color: 'skyblue', marginTop : '10px'}}></i>
          <h5>19°</h5>
        </div>
        <div className='box33'>
          <h5>Sat</h5>
          <i class="fa-solid fa-cloud-sun-rain" style={{color: 'skyblue', marginTop : '10px'}}></i>
          <h5>23°</h5>
        </div>
        <div className='box33'>
          <h5>Sun</h5>
          <i class="fa-solid fa-sun" style={{color: 'orange', marginTop : '10px'}}></i>
          <h5>29°</h5>
        </div>
      </div>
      
    </div>
  );
};

export default Weather;


