import React from "react";

const Navbar = () => {
  return (
    <header className="">
      <nav className="flex justify-between mx-16 my-4 font-bold">
        <h1 className="text-3xl">DashboardZen</h1>
        <ul className="flex gap-4">
          <li>Configure</li>
          <li>Profile</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
