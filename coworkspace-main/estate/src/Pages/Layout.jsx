// Layout.js
import React from 'react';
import Map from "../Pages/Map"; // The map component we just created
import Results from "../Pages/Results"; // Your results component
import Sidebar from "../Pages/Sidebar"; // Your sidebar component
import "../Styles/Layout.css";

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <Results />
      <Map />
    </div>
  );
};

export default Layout;
