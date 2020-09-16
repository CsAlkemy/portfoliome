import React from "react";


import "./style.scss";
import project2 from "../images/banner/champcafe.png";
import { FaNodeJs } from "react-icons/fa";

const tourgo_Project = (props) => (
    <div className="card mt-4 card_Style">
    <div className="card-content">
      <div className="columns">
        <div className="column is-4 is-full-mobile">
          <div className="card-content">
            <figure>
              <img src={project2} alt="project one banner"></img>
            </figure>
          </div>
        </div>
        <div className="column is-full-mobile">
          <div className="media-content">
            <p className="title is-4 has-text-white">Tourgo</p>
            <p className="title is-6 has-text-white">
              Tourgo is for helping business...
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

export default tourgo_Project;
