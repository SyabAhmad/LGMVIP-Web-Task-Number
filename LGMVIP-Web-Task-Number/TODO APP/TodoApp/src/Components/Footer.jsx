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
              <LinkedinIcon color="#ef6c00" />
            </a>
            <a
              href="https://twitter.c
            om/syed_syab_ahmad"
            >
              <TwitterIcon color="#ef6c00" />
            </a>
            <a href="https://www.github.com/SyabAhmad">
              <GithubIcon color="#ef6c00" />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
