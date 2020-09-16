import React from "react";

import "./style.scss";
import coronaBanner from "../images/banner/corona.png";

import { FaNodeJs, FaReact, FaDatabase } from "react-icons/fa";

import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

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
            <div className="is-flex">
              <p className="title is-4 has-text-white">
                Corona Map &nbsp; &nbsp;
              </p>
              <a
                className="button is-light is-small"
                href="https://github.com/CsAlkemy/corona19"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub></FaGithub>
              </a>
              &nbsp; &nbsp;
              <a
                className="button is-light is-small"
                href="https://coronavirus-map-dashboard.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <BiLinkExternal />
              </a>
            </div>
            <p className="title is-6 has-text-white has-text-weight-light">
              I build this web app to show Covid 19 status on map. Tried to
              follow the trend lol!
            </p>
            <p className=" title is-7 has-text-success has-text-weight-light px-0">
              {" "}
              August 2020{" "}
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
