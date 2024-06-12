import React from 'react'
import StockUpdates from './stockupdates/StockUpdates'
import NewsArticles from './news/NewsArticles'
import ChatBox from './ChatBox'
import WeatherData from './WeatherData'

const Home = () => {
  return (
    <main className="h-full mx-16 my-12 flex flex-col gap-8 overflow-auto">
        <StockUpdates />
        <div className="h-full grid grid-cols-2 grid-rows-7 gap-8 overflow-auto">
          <NewsArticles />
          <ChatBox />
          <div className="row-span-3 grid grid-cols-2 gap-8">
            <WeatherData />
            <WeatherData />
          </div>
        </div>
      </main>
  )
}

export default Home