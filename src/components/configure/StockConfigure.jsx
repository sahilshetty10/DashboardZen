import React, { useEffect, useState } from "react";

const StockConfigure = () => {
  const [symbols, setSymbols] = useState([]);
  const [symbolList, setSymbolList] = useState([]);

  useEffect(() => {
    if (localStorage.symbols) {
      setSymbols(JSON.parse(localStorage.symbols));
    } else {
      setSymbols(["", "", ""]);
    }
    fetchStockData();
  }, []);

  const fetchStockData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-ekWMSm98EKLKMQXynXgLo5At",
      },
    };

    let response = await fetch(
      "https://api.coingecko.com/api/v3/coins/list",
      options,
    );
    let data = await response.json();
    let symbols = data.map((item) => item.id);
    setSymbolList(symbols);
  };

  const handlePredict = (event, index) => {
    let input = event.target.value;
    let symbolListElement = document.getElementById(`symbol-${index}`);
    if (input.length < 2) {
      symbolListElement.innerHTML = "";
      return;
    }
    let filteredSymbols = symbolList.filter((symbol) =>
      symbol.startsWith(input),
    );
    symbolListElement.innerHTML = "";
    filteredSymbols.forEach((symbol) => {
      let li = document.createElement("li");
      li.textContent = symbol;
      li.addEventListener("click", (event) => {
        let newSymbols = [...symbols];
        newSymbols[index] = event.target.textContent;
        setSymbols(newSymbols);
        event.target.parentElement.previousElementSibling.value =
          event.target.textContent;
        symbolListElement.innerHTML = "";
      });
      li.className =
        "w-full py-4 px-8 bg-slate-100 rounded-[15px] border cursor-pointer hover:bg-slate-200";
      symbolListElement.appendChild(li);
    });
  };

  const handleChange = (event, index) => {
    let newSymbols = [...symbols];
    newSymbols[index] = event.target.value;
    setSymbols(newSymbols);
  };

  const handleSave = () => {
    localStorage.symbols = JSON.stringify(symbols);
    alert("Configuration saved successfully");
  };

  return (
    <section className="flex flex-col items-center gap-8">
      <h2 className="container-title">Stock Symbols</h2>
      {symbols.map((symbol, index) => (
        <div key={index} className="relative w-full">
          <label htmlFor={`symbol-input-${index}`} className="mb-2 block">
            Symbol {index + 1}
          </label>
          <input
            type="text"
            id={`symbol-input-${index}`}
            value={symbol}
            onChange={(event) => handleChange(event, index)}
            onKeyUp={(event) => handlePredict(event, index)}
            className="w-full rounded-[15px] border bg-slate-100 px-8 py-4"
          />
          <ul
            id={`symbol-${index}`}
            className="absolute z-10 flex max-h-60 w-full flex-col overflow-auto bg-white"
          ></ul>
        </div>
      ))}
      <button
        className="rounded-[15px] border bg-slate-100 px-8 py-4 hover:bg-slate-200"
        onClick={handleSave}
      >
        Save
      </button>
    </section>
  );
};

export default StockConfigure;
