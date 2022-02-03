import React, { useState, useEffect } from "react";
import { fetchCountryInfo } from "./fetchCountryData";
import SearchCountries from "./components/SearchCountries";
import CountryList from "./components/CountryList";

function App() {
  const [countryFilter, setCountryFilter] = useState("");
  const [countryData, setCountryData] = useState("");

  useEffect(() => {
    fetchCountryInfo().then((countryInfo) => setCountryData(countryInfo));
  }, []);

  const handleFilterChange = (event) => setCountryFilter(event.target.value);

  return (
    <>
      <SearchCountries onChangeHandler={handleFilterChange} />
      <CountryList countries={countryData} filter={countryFilter} />
    </>
  );
}

export default App;
