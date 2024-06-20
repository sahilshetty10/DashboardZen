import React, { useState } from "react";

const WeatherConfigure = () => {
  const [location, setLocation] = useState("");
  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const handlePredict = async (event) => {
    let input = event.target.value;
    let locationPredict = document.getElementById("location-predict");
    if (input.length < 2) {
      locationPredict.innerHTML = "";
      return;
    }
    let response = await fetch(
      `http://api.weatherapi.com/v1/search.json?key=5c2cd8491d4f4186aea02645241403&q=${input}`,
    );
    let data = await response.json();
    let locations = data.map((location) => {
      let li = document.createElement("li");
      li.textContent = location.name;
      li.addEventListener("click", (event) => {
        localStorage.location = `${location.lat},${location.lon}`;
        document.getElementById("weatherLocation").value =
          event.target.textContent;
        locationPredict.innerHTML = "";
      });
      li.className =
        "w-full py-4 px-8 bg-slate-100 rounded-[15px] border cursor-pointer hover:bg-slate-200";
      return li;
    });
    locationPredict.innerHTML = "";
    locations.forEach((location) => {
      locationPredict.appendChild(location);
    });
  };

  return (
    <section className="flex flex-col items-center gap-8">
      <h2 className="container-title">Weather Configuration</h2>
      <div className="relative w-full">
        <label htmlFor="weatherLocation">Location</label>
        <input
          type="text"
          name="weatherLocation"
          id="weatherLocation"
          className="w-full rounded-[15px] border bg-slate-100 px-8 py-4"
          placeholder="Enter location"
          onChange={handleChange}
          onKeyUp={handlePredict}
        />
        <ul
          id="location-predict"
          className="absolute z-10 flex max-h-60 w-full flex-col overflow-auto bg-white"
        ></ul>
      </div>
    </section>
  );
};

export default WeatherConfigure;
