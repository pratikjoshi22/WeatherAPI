import React from "react";

const WeatherDisplay = ({ weather, error }) => {
  if (error) {
    return <p>{error}</p>;
  }

  if (!weather) {
    return <p>Enter a city to get the weather information.</p>;
  }

  return (
    <div>
      <h2>{weather.location.name}</h2>
      <p>{weather.current.condition.text}</p>
      <p>Temperature: {weather.current.temp_c}°C</p>
      <img
        src={weather.current.condition.icon}
        alt={weather.current.condition.text}
      />
    </div>
  );
};

export default WeatherDisplay;
