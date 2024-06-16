import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import WeatherDisplay from "./WeatherDisplay";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (city) {
      setLoading(true);
      fetch(
        `http://api.weatherapi.com/v1/current.json?key=17a5f80a5e9f4846825120544241606&q=${city}&aqi=no`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            setError(data.error.message);
            setWeather(null);
          } else {
            setWeather(data);
            setError(null);
          }
          setLoading(false);
        })
        .catch(() => {
          setError("Error fetching weather data");
          setLoading(false);
        });
    }
  }, [city]);

  return (
    <div>
      <h1>Weather App</h1>
      <SearchBar setCity={setCity} />
      {loading ? <p>Loading...</p> : <WeatherDisplay weather={weather} error={error} />}
    </div>
  );
}

export default App;
