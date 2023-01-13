import React from "react";
import Me from "../assets/me.jpg";

export default function Info() {
  return (
    <div className="info">
      <img src={Me} alt="" />
      <section className="section-info">
        <h2 className="name">Vinnie Marchisio</h2>
        <p className="stack">Frontend Developer</p>
        <div className="contact">
          <button>
            <a href="mailto:vmrchs@gmail.com" className="mail-link">
              Email
            </a>
          </button>
          <button>
            <a href="">LinkedIn</a>
          </button>
        </div>
      </section>
    </div>
  );
}
