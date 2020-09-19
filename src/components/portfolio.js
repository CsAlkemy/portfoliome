import React from "react";

import "./style.scss";
import Portfolio from "../images/banner/portfolio.png";
import { SiGatsby, SiBulma, SiGraphql, SiNetlify } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

const portfolio_me = (props) => (
  <div className="card mt-4 card_Style cardShadow">
    <div className="card-content">
      <div className="columns">
        <div className="column is-4 is-full-mobile">
          <div className="card-content">
            <figure>
              <img src={Portfolio} alt="project portfolio banner"></img>
            </figure>
          </div>
        </div>
        <div className="column is-full-mobile">
          <div className="media-content">
            <div className="is-flex">
              <p className="title is-4 has-text-white">
                Portfolio Website &nbsp; &nbsp;
              </p>
              <a
                className="button is-light is-small"
                href="https://github.com/CsAlkemy/portfoliome"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub></FaGithub>
              </a>
              &nbsp; &nbsp;
              <a
                className="button is-light is-small"
                href="https://alkemyme.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <BiLinkExternal />
              </a>
            </div>
            <p className="title is-6 has-text-white has-text-weight-light">
              This site...This site is always under construction, just like me.
            </p>
            <p className=" title is-7 has-text-success has-text-weight-light px-0">
              {" "}
              Since September 2020{" "}
            </p>

            <div className="field is-grouped is-grouped-multiline">
              <div className="control">
                <div className="tags has-addons is-normal">
                  <span className="tag is-black">Gatsby</span>
                  <span className="tag is-light">
                    <SiGatsby></SiGatsby>
                  </span>
                </div>
              </div>
              <div className="control">
                <div className="tags has-addons is-normal">
                  <span className="tag is-black">Bulma UI</span>
                  <span className="tag is-info">
                    <SiBulma />
                  </span>
                </div>
              </div>
              <div className="control">
                <div className="tags has-addons is-normal">
                  <span className="tag is-black">GraphQl</span>
                  <span className="tag is-danger">
                    <SiGraphql />
                  </span>
                </div>
              </div>
              <div className="control">
                <div className="tags has-addons is-normal">
                  <span className="tag is-black">Netlify</span>
                  <span className="tag is-success">
                    <SiNetlify />
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

export default portfolio_me;
