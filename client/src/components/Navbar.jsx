import React from "react";

const Navbar = () => {
  return (
    <header className=" mx-16 my-8">
      <nav className="flex justify-between font-bold">
        <h1 className="text-3xl">DashboardZen</h1>
        <ul className="flex gap-8">
          <li>Configure</li>
          <li>Profile</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
