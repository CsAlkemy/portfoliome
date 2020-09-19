import React from "react";

import "./style.scss";
import DevHeros from "../images/banner/devheros.png";
import { SiHtml5, SiBootstrap, SiJavascript } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import {BiLinkExternal } from "react-icons/bi"

const dev_heros = (props) => (
  <div className="card mt-4 card_Style cardShadow">
    <div className="card-content">
      <div className="columns">
        <div className="column is-4 is-full-mobile">
          <div className="card-content">
            <figure>
              <img src={DevHeros} alt="project devheros banner"></img>
            </figure>
          </div>
        </div>
        <div className="column is-full-mobile">
          <div className="media-content">
            <div className="is-flex">
              <p className="title is-4 has-text-white">
                DevHeros &nbsp; &nbsp;
              </p>
              <a className="button is-light is-small" href="https://github.com/CsAlkemy" target='_blank' rel='noreferrer' >
                <FaGithub></FaGithub>
              </a>
              &nbsp; &nbsp;
              <i className="button is-light is-small">
                <BiLinkExternal />
              </i>
            </div>
            <p className="title is-6 has-text-white has-text-weight-light">
              Dev heros delivary is static website for area based home delivary services 
            </p>
            <p className=' title is-7 has-text-success has-text-weight-light px-0'> March 2020 </p>
            <div className="field is-grouped is-grouped-multiline">
              <div className="control">
                <div className="tags has-addons is-normal">
                  <span className="tag is-black">Html</span>
                  <span className="tag is-danger">
                    <SiHtml5 />
                  </span>
                </div>
              </div>
              <div className="control">
                <div className="tags has-addons is-normal">
                  <span className="tag is-black">Bootstrap</span>
                  <span className="tag is-purple">
                    <SiBootstrap />
                  </span>
                </div>
              </div>
              <div className="control">
                <div className="tags has-addons is-normal">
                  <span className="tag is-black">JavaScript</span>
                  <span className="tag is-warning">
                    <SiJavascript />
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

export default dev_heros;
