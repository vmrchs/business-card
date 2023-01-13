import React from "react";
// import Github from "../assets/github.svg";
// import Twitter from "../assets/twitter.svg";
// import Instagram from "../assets/instagram.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <span>
        <a href="">
          {/* <img src={Github} alt="" /> */}
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
        <a href="">
          {/* <img src={Twitter} alt="" /> */}
          <FontAwesomeIcon icon={faTwitter} className="icon" />
        </a>
        <a href="">
          {/* <img src={Instagram} alt="" /> */}
          <FontAwesomeIcon icon={faInstagram} className="icon" />
        </a>
      </span>
    </footer>
  );
}
