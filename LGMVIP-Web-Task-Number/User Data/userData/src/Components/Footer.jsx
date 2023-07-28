import React from "react";
import "../Style/Footer.css";
import { LinkedinIcon, TwitterIcon, GithubIcon } from "lucide-react";
const Footer = () => {
  return (
    <>
      <div>
        <footer>
          <h2>Follow me on </h2>
          <div>
            <a href="https://www.linkedin.com/in/SyedSyab">
              <LinkedinIcon color="rgb(19, 105, 190)" />
            </a>
            <a href="https://twitter.com/syed_syab_ahmad">
              <TwitterIcon color="rgb(19, 105, 190)" />
            </a>
            <a href="https://www.github.com/SyabAhmad">
              <GithubIcon color="rgb(19, 105, 190)" />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
