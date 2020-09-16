import React from "react";

import "./style.scss";
import tourgo from "../images/banner/tourgo.png";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiTypescript } from "react-icons/si";

const tourgo_Project = (props) => (
  <div className="card mt-4 card_Style p-0">
    <div className="card-content">
      <div className="columns">
        <div className="column is-4 is-full-mobile">
          <div className="card-content">
            <figure>
              <img src={tourgo} alt="project one banner"></img>
            </figure>
          </div>
        </div>
        <div className="column is-full-mobile">
          <div className="media-content">
            <div className="is-flex">
              <p className="title is-4 has-text-white">Tourgo &nbsp; &nbsp;</p>
            </div>
            <p className="title is-6 has-text-white has-text-weight-light">
              Tourgo is a web application for booking or renting hotel rooms and
              tour packages.
            </p>
            <p className=" title is-7 has-text-success has-text-weight-light px-0">
              {" "}
              Since Sept 19{" "}
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
                  <span className="tag is-black">TypeScript</span>
                  <span className="tag is-info">
                    <SiTypescript />
                  </span>
                </div>
              </div>
              <div className="control">
                <div className="tags has-addons is-normal">
                  <span className="tag is-black">MongoDB</span>
                  <span className="tag is-normal">
                    <DiMongodb />
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

export default tourgo_Project;
