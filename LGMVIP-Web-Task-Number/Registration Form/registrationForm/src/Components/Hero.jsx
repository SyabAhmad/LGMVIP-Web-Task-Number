import React from "react";
import "../Style/Hero.css";
const Hero = () => {
  return (
    <>
      <main>
        <div className="form">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
            <label htmlFor="email">Email</label>
            <input type="text" id="email" />
            <label htmlFor="website">Website</label>
            <input type="text" id="website" />
            <label htmlFor="Link">Image Link</label>
            <input type="text" id="Link" />
          </div>
        </div>
        <div>
          <hr />
        </div>
        <div className="display">
          <div>
            <h2>Name</h2>
            <h3>Email Address</h3>
            <p>Website</p>
            image
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
