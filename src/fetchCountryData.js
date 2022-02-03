import axios from "axios";

const fetchCountryInfo = (countryName) =>
  axios
    .get("https://restcountries.com/v3.1/all")
    .then((response) => response.data);

const fetchCountryWeather = (cityName) =>
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    )
    .then((response) => response.data);

export { fetchCountryInfo, fetchCountryWeather };
