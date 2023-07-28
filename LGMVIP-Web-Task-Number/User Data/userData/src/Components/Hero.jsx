import React, { useEffect, useState } from "react";
import "../Style/Hero.css";
import { Mails, Target, DatabaseIcon } from "lucide-react";
const Hero = () => {
  const ApiKey = "https://reqres.in/api/users?page=1";
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const gettingData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(ApiKey);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data1 = await response.json();
      setData(data1.data);
      setIsLoading(false);
    } catch (error) {
      setError("Error fetching data. Please try again later.");
      setIsLoading(false);
    }
  };
  useEffect(() => {
    gettingData();
  }, []);

  return (
    <>
      <div className="hero-text">
        <h1>Click on the button to get data</h1>
        <button onClick={gettingData}>
          Get Data <DatabaseIcon color="rgb(19, 105, 190)" />
        </button>
      </div>
      <hr />
      <div className="display">
        {isLoading ? (
          // Display the loading spinner while data is being fetched
          <div className="spinner"></div>
        ) : error ? (
          // Display error message if data fetching encountered an error
          <p>{error}</p>
        ) : data.length > 0 ? (
          // Check if data is an array with at least one element
          <ul className="grid">
            {data.map((user) => (
              <li key={user.id} className="card">
                <div className="imageDiv">
                  <img src={user.avatar} alt="Image" />
                </div>
                <div className="userInfo">
                  <h2>
                    {<Target color="rgb(19, 105, 190)" />} {"  "}{" "}
                    {user.first_name} {user.last_name}
                  </h2>
                  <span>
                    <a href={`mailto:${user.email}`}>
                      {<Mails color="rgb(19, 105, 190)" />}
                      {"   "}
                      {user.email}
                    </a>
                  </span>
                </div>
                <p>
                  {"("}
                  {user.id}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          // Display a message if there is no data
          <p>No data available.</p>
        )}
      </div>
    </>
  );
};
export default Hero;
