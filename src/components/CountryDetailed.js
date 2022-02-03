import React, { useState, useEffect } from "react";
import { fetchCountryWeather } from "../fetchCountryData";

const Weather = ({ weather }) => {
  return Object.keys(weather).length === 0 ? (
    <i>Loading weather data...</i>
  ) : (
    <>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
      />
      <div>
        <b>Temperature: {weather.main.temp}</b>
      </div>
      <div>
        <b>Wind: {weather.main.temp}</b>
      </div>
    </>
  );
};

const CountryDetailed = ({ countryData }) => {
  const [weather, setWeather] = useState({});

  useEffect(
    () =>
      fetchCountryWeather(countryData.capital).then((weatherData) =>
        setWeather(weatherData)
      ),
    []
  );

  return (
    <>
      <h1>{countryData.name.common}</h1>
      <p>
        Capital: <b>{countryData.capital}</b>
      </p>
      <p>
        Population: <b>{countryData.population}</b>
      </p>
      <h2>Languages</h2>
      <ul>
        {Object.values(countryData.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <h2>Flag</h2>
      <img src={countryData.flags["png"]} width="150" height="150" />
      <h2>Weather</h2>
      <Weather weather={weather} />
    </>
  );
};

export default CountryDetailed;
