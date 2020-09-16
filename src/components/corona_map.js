import React from "react";

import "./style.scss";
import coronaBanner from "../images/banner/corona.png";

import { FaNodeJs, FaReact, FaDatabase } from "react-icons/fa";


const corona_map = (props) => (
  <div className="card mt-4 card_Style">
    <div className="card-content">
      <div className="columns">
        <div className="column is-4 is-full-mobile">
          <div className="card-content">
            <figure>
              <img src={coronaBanner} alt="project corona banner"></img>
            </figure>
          </div>
        </div>
        <div className="column is-full-mobile">
          <div className="media-content">
            <p className="title is-4 has-text-white">Corona On Map</p>
            <p className="title is-6 has-text-white">
              corona is for helping business...
            </p>
            <div className="field is-grouped is-grouped-multiline">
              <div className="control">
                <div className="tags has-addons is-normal">
                  <span className="tag is-black">NodeJs</span>
                  <span className="tag is-success">
                    <FaNodeJs></FaNodeJs>
                  </span>
                </div>
              </div>
              <div className="control">
                <div className="tags has-addons is-normal">
                  <span className="tag is-black">React</span>
                  <span className="tag is-info">
                    <FaReact />
                  </span>
                </div>
              </div>
              <div className="control">
                <div className="tags has-addons is-normal">
                  <span className="tag is-black">REST API</span>
                  <span className="tag is-normal">
                    <FaDatabase />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default corona_map;
