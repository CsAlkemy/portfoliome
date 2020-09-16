import React from "react";

import "./style.scss";
import heroImage from "../images/banner/devheros.png";

import { FaNodeJs } from "react-icons/fa";

const easy_invoiceProject = (props) => (
  <div className="card mt-4 card_Style">
    <div className="card-content">
      <div className="columns">
        <div className="column is-4 is-full-mobile">
          <div className="card-content">
            <figure>
              <img src={heroImage} alt="project one banner"></img>
            </figure>
          </div>
        </div>
        <div className="column is-full-mobile">
          <div className="media-content">
            <p className="title is-4 has-text-white">Easy Invoice</p>
            <p className="title is-6 has-text-white">
              Easy invoice is for helping business...
            </p>
            <div className="tags has-addons">
              <span className="tag">NodeJs</span>
              <span className="tag is-info">
                <FaNodeJs></FaNodeJs>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default easy_invoiceProject;
