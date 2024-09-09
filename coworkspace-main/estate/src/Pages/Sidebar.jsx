import React from 'react';
import "../Styles/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h3>Filters</h3>
      <div>
        <p>Sort By</p>
        <label><input type="radio" name="sort" /> Popularity</label><br />
        <label><input type="radio" name="sort" /> Distance (from city center)</label><br />
        <label><input type="radio" name="sort" /> Price (Low to High)</label><br />
        <label><input type="radio" name="sort" /> Price (High to Low)</label>
      </div>
      <div>
        <p>Timings</p>
        <label><input type="checkbox" /> Open Now</label><br />
        <label><input type="checkbox" /> Open Early (before 9 am)</label><br />
        <label><input type="checkbox" /> Closes Late (after 7 pm)</label>
      </div>
      <div>
        <p>Brands</p>
        <label><input type="checkbox" /> WeWork</label><br />
        <label><input type="checkbox" /> AWFIS</label><br />
        <label><input type="checkbox" /> CoWrks</label><br />
        <label><input type="checkbox" /> Innov8</label>
      </div>
    </div>
  );
}

export default Sidebar;
