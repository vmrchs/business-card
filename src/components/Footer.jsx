import React from "react";
import Github from "../assets/github.svg";
import Twitter from "../assets/twitter.svg";
import Instagram from "../assets/instagram.svg";

export default function Footer() {
  return (
    <footer>
      <span>
        <a href="">
          <img src={Github} alt="" />
        </a>
        <a href="">
          <img src={Twitter} alt="" />
        </a>
        <a href="">
          <img src={Instagram} alt="" />
        </a>
      </span>
    </footer>
  );
}
