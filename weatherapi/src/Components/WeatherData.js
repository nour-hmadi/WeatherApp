import React from "react";
import { useState, useEffect } from "react";
import CurrentHour from "./CurrentHour";

function WeatherData() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = () => {
    // Fetch weather data for the entered city
    const apiKey = "9UsR2ZX4rOuxIMszpdyt0R9mGUpMs1Z6";
    const apiUrl = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("City not found");
        }
        return response.json();
      })
      .then((data) => {
        setWeatherData(data);
        setError(null);
      })
      .catch((error) => {
        setWeatherData(null);
        setError(error.message);
      });
  };

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={handleSearch}>Get Weather</button>

      {error && <p>{error}</p>}

      {weatherData && (
        <div>
        <CurrentHour temp={weatherData.current.temperature} humi={weatherData.current.humidity} pres= {weatherData.current.pressure} />
          <h2>Weather in {weatherData.location.name}</h2>
          <p>Temperature: {weatherData.current.temperature}°C</p>
          <p>Humidity: {weatherData.current.humidity}%</p>
          <p>Pressure: {weatherData.current.pressure} mb</p>
          <p>
            Weather Description: {weatherData.current.weather_descriptions[0]}
          </p>
        </div>
      )}
    </div>
  );
}

export default WeatherData;
