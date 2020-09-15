import React from "react";
import "./style.scss";

const Footer = () => (
  <div>
    <figure>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#00cba9"
          fillOpacity="1"
          d="M0,288L720,224L1440,288L1440,320L720,320L0,320Z"
        ></path>
      </svg>
    </figure>
    <footer className="footer">
      <div className="columns">
        <div className="column is-half is-mobile is-primary">
          <h1>Contact me</h1>
          <ul>
            <li>a</li>
            <li>b</li>
            <li>c</li>
          </ul>
        </div>
        <div className="column is-half is-mobile">2</div>
      </div>
    </footer>
  </div>
);
export default Footer;
