import React from "react";
import Me from "../assets/me.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Info() {
  return (
    <div className="info">
      <img src={Me} alt="" />
      <section className="section-info">
        <h2 className="name">Vinnie Marchisio</h2>
        <p className="stack">Frontend Developer</p>
        <div className="contact">
          <button>
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="mailto:vmrchs@gmail.com"> Email</a>
          </button>
          <button>
            <FontAwesomeIcon icon={faLinkedin} />
            <a href=""> LinkedIn</a>
          </button>
        </div>
      </section>
    </div>
  );
}
