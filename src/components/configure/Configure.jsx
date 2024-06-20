import React from "react";
import StockConfigure from "./StockConfigure";
import NewsConfigure from "./NewsConfigure";
import HolidaysConfigure from "./HolidaysConfigure";
import WeatherConfigure from "./WeatherConfigure";

const Configure = () => {
  return (
    <main className="bg-container mx-16 my-12 grid h-full grid-cols-3 gap-12">
      <h1 className="col-span-3 text-center text-5xl font-bold">
        Customize Your Dashboard
      </h1>
      <StockConfigure />
      <NewsConfigure />
      <div className="flex flex-col gap-8">
        <HolidaysConfigure />
        <WeatherConfigure />
      </div>
    </main>
  );
};

export default Configure;
