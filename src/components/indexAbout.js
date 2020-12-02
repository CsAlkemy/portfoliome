import React from "react";

import "./style.scss";
import heroImage from '../images/hridoyProfile.png'
import Resume from '../images/ALKEMY HOSSAIN CV.pdf'

const indexAbout = (props) => (
  <section className="hero is-medium primaryColor">
    <div className="hero-body py-6">
      <div className="container">
        <div className="columns has-text-white Customflex">
          <div className="column is mobile">
            <h1 className="fontHero">Hi, I&apos;m Alkemy Hossain. I build things for the web.</h1>
            <p>I have been working on software field for more then one year and develop user interective web application to fulfill organization's needs. </p>
            <a href={Resume} download class="button is-primary has-text-black mt-5" >Download Resume</a>
          </div>
          <div className="column">
            <figure>
              <img src={heroImage}  className="imagehero" alt="main profile  of alkemy">
              </img>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default indexAbout;
