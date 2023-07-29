import React, { useEffect, useState } from "react";
import "../Style/Hero.css";
import { v4 as uuidv4 } from "uuid";
import {
  Heading1Icon,
  MailIcon,
  WebhookIcon,
  ImageIcon,
  TrainIcon,
  Trash,
  TrashIcon,
} from "lucide-react";

const Hero = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [image, setImage] = useState("");
  const [gender, setGender] = useState("");
  const [course, setCourse] = useState([]);
  const [alldata, setAllData] = useState([]);
  const [updateTrigger, setUpdateTrigger] = useState(false);
  const [id, setId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const uniqueID = uuidv4();
    if (updateTrigger === true) {
      if (name === "" || email === "" || website === "" || image === "") {
        setErrorMessage("Please fill all the fields, * indecates Required");
      } else {
        setErrorMessage("");
        setAllData((prev) => [
          {
            id: uniqueID,
            name: name,
            email: email,
            website: website,
            image: image,
            gender: gender,
          },
          ...prev,
        ]);
      }
    }

    setUpdateTrigger(false);
  }, [updateTrigger]);

  const handleCourseSelection = (e) => {
    const courseselected = e.target.value;
    if (e.target.checked) {
      setCourse((prev) => [...prev, courseselected]);
    } else {
      setCourse((prev) => prev.filter((course1) => course1 !== courseselected));
    }
  };

  const handleButtonClicked = () => {
    try {
      setUpdateTrigger(true);
    } catch (error) {
      console.log("Error :", error);
    }
  };

  const removeItem = (id1) => {
    setAllData((prev) => prev.filter((item) => item.id !== id1));
  };

  const clearAll = (e) => {
    setName("");
    setEmail("");
    setWebsite("");
    setImage("");
    setGender("");
    setErrorMessage("");
  };

  // console.log(gender);
  // console.log(course);
  return (
    <>
      <main className="main">
        <div className="form">
          <div className="form1">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email">Email *</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="website">Website *</label>
            <input
              type="text"
              id="website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
            <label htmlFor="Link">Image Link *</label>
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
                value="Java"
                onChange={handleCourseSelection}
              />
              <label htmlFor="web">web</label>
              <input
                type="checkbox"
                id="web"
                value="Web"
                onChange={handleCourseSelection}
              />
              <label htmlFor="AI">AI</label>
              <input
                type="checkbox"
                id="AI"
                value="AI"
                onChange={handleCourseSelection}
              />
            </div>
            <div className="buttons">
              <button onClick={handleButtonClicked}>Add</button>
              <button onClick={clearAll}>Clear</button>
            </div>
            <span className="flex item-center" style={{ color: "red" }}>
              {errorMessage}
            </span>
          </div>
        </div>
        <div>
          <hr />
        </div>
        <div className="display">
          <h3>UserData</h3>

          {alldata.map((data) => (
            <div className="card" key={data.id}>
              <li key={data.id}>
                <div>
                  <h2>{data.name}</h2>
                  <MailIcon />
                  <h3>{data.email}</h3>
                  <WebhookIcon />
                  <p>{data.website}</p>
                  <p>{data.course}</p>
                  <p>{data.gender}</p>
                </div>
                <hr id="hr1" />
                <div>
                  <img src={data.image} alt="Image" />
                </div>
                <div onClick={() => removeItem(data.id)}>
                  <TrashIcon />
                </div>
              </li>
            </div>
          ))}

          {/* <div>
              <h2>Name</h2>
              <h3>Email Address</h3>
              <p>Website</p>
            </div> */}
        </div>
      </main>
    </>
  );
};

export default Hero;
