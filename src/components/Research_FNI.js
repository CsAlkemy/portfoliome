import React from "react";

import "./style.scss";
import image from "../images/social share.png";
import pdf from "../images/thesis final.pdf";

const researchFNI = (props) => (
  <section className="hero is-medium  primaryColor is-bold">
    <div className="hero-body">
      <div className="container">
        <div className="columns">
          <div className="column is-3 is-mobile"></div>
          <div className="column is-6 is-mobile">
            <div className="card common_colour card_Research">
              <div className="card-content">
                <div className=" card card_Research2">
                  <div className="card-content">
                    <figure className="image">
                      <img src={image} alt="card news"></img>
                    </figure>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <p className="title is-5 has-text-white">
                  Fake News Identification by Stance Detestion
                </p>
                <p className="title is-7 has-text-success has-text-weight-light px-0">
                  Thesis work for Bachalor of Science
                </p>
                <p className="title is-6 has-text-white has-text-weight-light">
                  Implemented “Fake news Identification by Stance Detection”, As
                  a team member my responsibility was to work on the dataset and
                  ML model.
                </p>
                <a href={pdf} download class="button is-primary has-text-black" >Download Paper</a>
              </div>
            </div>
          </div>
          <div className="column is-3 is-mobile"></div>
        </div>
      </div>
    </div>
  </section>
);

export default researchFNI;
