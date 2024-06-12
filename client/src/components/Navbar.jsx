import React from "react";

const Navbar = ({isHome, setIsHome}) => {
  const setHome = () => {
    setIsHome(true);
  }
  const setConfigure = () => {
    setIsHome(false);
  }
  return (
    <header className="bg-container mx-16 my-8">
      <nav className="flex items-center justify-between font-bold">
        <h1 className="text-3xl cursor-pointer" onClick={setHome}>DashboardZen</h1>
        <p className="cursor-pointer" onClick={setConfigure}>Configure</p>
      </nav>
    </header>
  );
};

export default Navbar;
