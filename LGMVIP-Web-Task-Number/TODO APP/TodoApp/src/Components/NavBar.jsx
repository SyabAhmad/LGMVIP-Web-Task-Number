import React, { useState } from "react";
import "../Style/NavBar.css";
const NavBar = () => {
  const [likeButton, setLikeButton] = useState("Like");
  const [count, setCount] = useState("0");
  const handleCountClick = (e) => {
    if (likeButton === "Like") {
      setLikeButton("Liked");
      setCount((prev) => {
        return (prev += 1);
      });
    } else {
      setLikeButton("Like");
      setCount((prev) => {
        return (prev -= 1);
      });
    }
  };
  return (
    <nav>
      <h2>ToDO Task</h2>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/SyedSyab">LinkedIn</a>
        </li>
        <li>
          <a href="https://www.github.com/SyabAhmad">GitHub</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/letsgrowmore/mycompany/">
            LetsGroMore (Official)
          </a>
        </li>
        <li>
          {count}{" "}
          <a href="#" onClick={handleCountClick}>
            {likeButton}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
