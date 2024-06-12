import React, { useEffect, useState } from "react";
import Stock from "./Stock";

const StockUpdates = () => {
  const [stockData, setStockData] = useState([]);
  const [symbols, setSymbols] = useState(["bitcoin", "ethereum", "ripple"]); // default symbols

  useEffect(() => {
    if (localStorage.symbols) {
      let symbols = JSON.parse(localStorage.symbols);
      setSymbols(symbols);
      fetchStockData(symbols);
    } else {
      localStorage.symbols = JSON.stringify(symbols);
      fetchStockData(symbols);
    }
  }, []);

  const fetchStockData = async (symbols) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-ekWMSm98EKLKMQXynXgLo5At",
      },
    };
    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${symbols.join("%2C")}&vs_currencies=usd&include_24hr_change=true&precision=full`,
      options,
    );
    const data = await response.json();
    setStockData(data);
  };

  return (
    <section className="flex justify-between gap-16">
      <Stock symbol={symbols[0]} data={stockData[symbols[0]]} />
      <Stock symbol={symbols[1]} data={stockData[symbols[1]]} />
      <Stock symbol={symbols[2]} data={stockData[symbols[2]]} />
    </section>
  );
};

export default StockUpdates;
