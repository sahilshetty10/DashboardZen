import React from "react";
import StockUpdates from "./components/stockupdates/StockUpdates";
import WeatherData from "./components/WeatherData";
import NewsArticles from "./components/NewsArticles";
import ChatBox from "./components/ChatBox";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="h-full mx-16 my-12 flex flex-col gap-8">
        <StockUpdates />
        <div className="h-full grid grid-cols-2 grid-rows-7 gap-8">
          <NewsArticles />
          <ChatBox />
          <div className="row-span-3 grid grid-cols-2 gap-8">
            <WeatherData />
            <WeatherData />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
