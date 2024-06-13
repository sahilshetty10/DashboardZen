import React, { useEffect, useState } from "react";

const HolidaysConfigure = () => {
  const [holidaysCountriesList, setHolidaysCountriesList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("CA");

  useEffect(() => {
    fetchHolidaysCountries();
    const storedCountry = localStorage.getItem("holidayCountry");
    if (storedCountry) {
      setSelectedCountry(storedCountry);
    }
  }, []);

  const fetchHolidaysCountries = async () => {
    let response = await fetch(
      "https://date.nager.at/api/v3/AvailableCountries",
    );
    let data = await response.json();
    let countries = data.map((country) => country.countryCode);
    setHolidaysCountriesList(countries);
  };

  const handleCountryChange = (e) => {
    const newCountry = e.target.value;
    setSelectedCountry(newCountry);
    localStorage.setItem("holidayCountry", newCountry);
  };

  return (
    <section className="flex flex-col items-center gap-8 w-full">
      <h2 className="container-title">Holidays Configuration</h2>
      <div className="flex w-full flex-col gap-4">
        <label htmlFor="holidayCountry">Country</label>
        <select
          name="holidayCountry"
          id="holidayCountry"
          value={selectedCountry}
          onChange={handleCountryChange}
          className="w-full rounded-[15px] border bg-slate-100 px-8 py-4 uppercase"
        >
          {holidaysCountriesList.map((country, index) => (
            <option value={country} key={index}>
              {country}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
};

export default HolidaysConfigure;
