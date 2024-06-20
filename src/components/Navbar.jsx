import React from "react";

const Navbar = ({ setIsHome }) => {
  const setHome = () => {
    setIsHome(true);
  };
  const setConfigure = () => {
    setIsHome(false);
  };
  return (
    <header className="bg-container mx-16 my-8">
      <nav className="flex items-center justify-between font-bold">
        <h1 className="cursor-pointer text-3xl" onClick={setHome}>
          DashboardZen
        </h1>
        <ul className="flex gap-8">
          <li className="cursor-pointer" onClick={setHome}>
            Home
          </li>
          <li className="cursor-pointer" onClick={setConfigure}>
            Configure
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
