import React from "react";

import "./style.scss";
import ZoomClone from "../images/banner/zoom.jpg";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiWebrtc } from "react-icons/si";

const zoom_clone = (props) => (
  <div className="card mt-4 card_Style">
    <div className="card-content">
      <div className="columns">
        <div className="column is-4 is-full-mobile">
          <div className="card-content">
            <figure>
              <img src={ZoomClone} alt="project zoom banner"></img>
            </figure>
          </div>
        </div>
        <div className="column is-full-mobile">
          <div className="media-content">
            <p className="title is-4 has-text-white">Zoom Clone</p>
            <p className="title is-6 has-text-white">
              zoom_clone is for helping business...
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
                  <span className="tag is-black">Web rtc</span>
                  <span className="tag is-danger">
                    <SiWebrtc />
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

export default zoom_clone;
