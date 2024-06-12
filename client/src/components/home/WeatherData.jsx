import React, { useEffect, useState } from "react";

const WeatherData = () => {
  const [weatherData, setWeatherData] = useState();

  useEffect(()=> {
    if (localStorage.location) {
    fetchWeather(localStorage.location);
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        let currentLocation = `${position.coords.latitude},${position.coords.longitude}`;
        localStorage.location = currentLocation;
      fetchWeather(currentLocation);
      }, (error) => {
        console.error(error);
        fetchWeather("auto:ip");
      });
    }
  }, [])

  const fetchWeather = async (location) => {
    let response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=5c2cd8491d4f4186aea02645241403&q=${location}`
    );
    let data = await response.json();
    console.log(data);
    setWeatherData(data);
  };

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <section className="bg-container text-lg flex flex-col items-center justify-between">
      <h2 className="font-semibold">
        {weatherData.location.name}, {weatherData.location.region}
      </h2>
      <p className="text-6xl">{weatherData.current.temp_c} &#8451;</p>
      <div className="flex items-center justify-center">
        <img
          src={weatherData.current.condition.icon}
          alt={weatherData.current.condition.text}
        />
        <p>{weatherData.current.condition.text}</p>
      </div>
    </section>
  );
};

export default WeatherData;
