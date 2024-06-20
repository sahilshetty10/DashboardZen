import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import Configure from "./components/configure/Configure";

function App() {
  const [isHome, setIsHome] = useState(true);
  return (
    <>
      <Navbar setIsHome={setIsHome} />
      {isHome ? <Home /> : <Configure />}
    </>
  );
}

export default App;
