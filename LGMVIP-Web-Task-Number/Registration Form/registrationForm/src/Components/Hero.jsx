import React, { useState } from "react";
import "../Style/Hero.css";
const Hero = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [image, setImage] = useState("");
  const [gender, setGender] = useState("");
  const [course, setCourse] = useState([]);

  console.log(gender);
  return (
    <>
      <main className="main">
        <div className="form">
          <div className="form1">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="website">Website</label>
            <input
              type="text"
              id="website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
            <label htmlFor="Link">Image Link</label>
            <input
              type="text"
              id="Link"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <div className="genderSelection">
              <label htmlFor="male">Gender: </label>
              <br />
              <label htmlFor="male">Male</label>
              <input
                type="radio"
                id="male"
                checked={gender === "male"}
                value="male"
                onChange={(e) => setGender(e.target.value)}
              />
              <label htmlFor="female">female</label>
              <input
                type="radio"
                id="female"
                checked={gender === "female"}
                value="female"
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
            <div className="courseSelection">
              <label htmlFor="Java">Course Selection: </label>
              <label htmlFor="java">Java</label>
              <input
                type="checkbox"
                id="java"
                value="java"
                onChange={(e) => setCourse(e.target.value)}
              />
              <label htmlFor="java">web</label>
              <input
                type="checkbox"
                id="web"
                value="web"
                onChange={(e) => setCourse(e.target.value)}
              />
              <label htmlFor="java">AI</label>
              <input
                type="checkbox"
                id="AI"
                value="AI"
                onChange={(e) => setCourse(e.target.value)}
              />
            </div>
            <div className="buttons">
              <button>Add</button>
              <button>Clear</button>
            </div>
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
