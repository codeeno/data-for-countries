import React, { useState } from "react";
import CountryDetailed from "./CountryDetailed.js";

const CountryLine = ({ countryData }) => {
  const [toggled, setToggle] = useState(false);
  const name = countryData.name.common;

  return toggled ? (
    <CountryDetailed countryData={countryData} />
  ) : (
    <>
      <li key={name}>
        {name}
        <button onClick={() => setToggle(true)} type="button">
          Show
        </button>
      </li>
    </>
  );
};

const CountryList = ({ countries, filter }) => {
  if (!countries) {
    return <i>Loading countries...</i>;
  }

  const filteredCountries = countries.filter((countryData) =>
    countryData.name.common.toLowerCase().includes(filter.toLowerCase())
  );

  if (filteredCountries.length <= 10 && filteredCountries.length > 1) {
    return (
      <ul>
        {filteredCountries.map((countryData) => (
          <CountryLine
            key={countryData.name.common}
            countryData={countryData}
          />
        ))}
      </ul>
    );
  }

  if (filteredCountries.length === 1) {
    return <CountryDetailed countryData={filteredCountries[0]} />;
  }

  return <p>Too many matches, specify another filter</p>;
};

export default CountryList;
