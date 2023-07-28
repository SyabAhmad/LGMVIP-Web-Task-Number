import "../Style/Header.css";
import React from "react";

const Header = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <h2>Getting User Data (intenship Project)</h2>
        </div>
        <div className="list">
          <ul>
            <li>LetsGromMore</li>
            <li>Portfolio</li>
            <li>
              <span>Contact me</span>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
