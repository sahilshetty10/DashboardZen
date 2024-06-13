import React from 'react'
import StockConfigure from './StockConfigure'
import NewsConfigure from './NewsConfigure'
import HolidaysConfigure from './HolidaysConfigure'
import WeatherConfigure from './WeatherConfigure'

const Configure = () => {
  return (
    <main className='grid grid-cols-3 mx-16 my-12 h-full bg-container gap-12'>
      <h1 className='col-span-3 text-5xl font-bold text-center'>Customize Your Dashboard</h1>
      <StockConfigure />
      <NewsConfigure />
      <div className="flex flex-col gap-8">
        <HolidaysConfigure />
        <WeatherConfigure />
      </div>
    </main>
  )
}

export default Configure