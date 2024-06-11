import React from 'react';
import './App.css';
import StockUpdates from './components/StockUpdates';
import WeatherData from './components/WeatherData';
import NewsArticles from './components/NewsArticles';
import ChatBox from './components/ChatBox';
import UpcomingHolidays from './components/UpcomingHolidays';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>DashboardZen</h1>
      </header>
      <main className="app-main">
        <div className="stock-section">
          <StockUpdates />
        </div>
        <div className="weather-section">
          <WeatherData />
        </div>
        <div className="news-section">
          <NewsArticles />
        </div>
        <div className="chat-section">
          <ChatBox />
        </div>
        <div className="holidays-section">
          <UpcomingHolidays />
        </div>
      </main>
    </div>
  );
}

export default App;
