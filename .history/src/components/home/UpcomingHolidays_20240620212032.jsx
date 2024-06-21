import React, { useEffect, useState } from "react";

const UpcomingHolidays = () => {
  const [country, setCountry] = useState("CA");
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    if (localStorage.holidayCountry) {
      setCountry(localStorage.holidayCountry);
      fetchHolidays(localStorage.holidayCountry);
    } else {
      localStorage.holidayCountry = country;
      fetchHolidays(country);
    }
  }, []);

  const fetchHolidays = async (country) => {
    let response = await fetch(
      `https://date.nager.at/api/v3/NextPublicHolidays/${country}`,
    );
    let data = await response.json();
    setHolidays(data);
  };
  return (
    <div className="bg-container flex flex-col gap-4 overflow-auto">
      <h2 className="container-title">Upcoming Holidays</h2>
      <div className="flex flex-col gap-4 overflow-y-scroll">
        {holidays.map((holiday, index) => (
          <div key={index} className="">
            <h3 className="font-semibold">{holiday.date}</h3>
            <p className="text-lg">{holiday.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingHolidays;
