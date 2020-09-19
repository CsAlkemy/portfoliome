import React from "react";

import "./style.scss";
import ZoomClone from "../images/banner/zoom.jpg";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiWebrtc } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

const zoom_clone = (props) => (
  <div className="card mt-4 card_Style cardShadow">
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
          <div className="is-flex">
              <p className="title is-4 has-text-white">
                Zoom Clone &nbsp; &nbsp;
              </p>
              <a
                className="button is-light is-small"
                href="https://github.com/CsAlkemy/MeetingApp"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub></FaGithub>
              </a>
              &nbsp; &nbsp;
              <i
                className="button is-light is-small"
              >
                <BiLinkExternal />
              </i>
            </div>
            <p className="title is-6 has-text-white has-text-weight-light">
              I build this web app to create meeting with friends with just a link.
            </p>
            <p className=" title is-7 has-text-success has-text-weight-light px-0">
              {" "}
              April 2020{" "}
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
