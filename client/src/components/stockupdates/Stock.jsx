import React from "react";

const Stock = ({ symbol, data }) => {
  if (!data) {
    return <div>Loading...</div>;
  }
  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  let price = USDollar.format(data.usd);
  let change = data.usd_24h_change.toFixed(2);

  return (
    <div className="bg-container flex-1 flex justify-between uppercase">
      <h2 className="text-xl font-semibold">{symbol} / USD</h2>
      <div className="flex gap-4 items-center font-bold">
        <p className="text-xl">{price}</p>
        <p className={change > 0 ? "text-green-500" : "text-red-500"}>{change}%</p>
      </div>
    </div>
  );
};

export default Stock;
