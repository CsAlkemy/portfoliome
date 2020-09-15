import React from "react";

import "./style.scss";
import heroImage from '../images/hridoyProfile.png'

const indexAbout = (props) => (
  <section className="hero is-medium primaryColor">
    <div className="hero-body">
      <div className="container">
        <div className="columns has-text-white Customflex">
          <div className="column is-full-mobile fontHero">
            <h1 className="">Hello, I&apos;m Alkemy Hossain. I build things for the web.</h1>
          </div>
          <div className="column">
            <figure>
              <img src={heroImage}  className="imagehero">
              </img>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default indexAbout;
