import React from "react";

import "./style.scss";

import EasyInvoice from "./easy_invoice";
import Tourgo from "./tourgo";
import Corona from "./corona_map";
import Zoom from "./zoom_clone";
import Portfolio from "./portfolio";
import DeHeros from "./devheros";

const homeProject = (props) => (
  <section className="hero is-medium primaryColor">
    <div className="hero-body py-5">
      <div className="container ">
        <h1 className="title has-text-white ">Projects</h1>
        <p className="suntitle has-text-white">
          Here you will find some of my personal projects I've worked on and
          built over the years.
        </p>
        <div className="columns">
          <div className="column is-full-mobile is-half-tablet is-half-desktop">
            <Tourgo />
          </div>
          <div className="column is-full-mobile is-half-tablet is-half-desktop">
            <Corona />
          </div>
        </div>
        <div className="columns">
          <div className="column is-full-mobile is-half-tablet is-half-desktop">
            <EasyInvoice />
          </div>
          <div className="column is-full-mobile is-half-tablet is-half-desktop">
            <Zoom />
          </div>
        </div>
        <div className="columns mb-5">
          <div className="column is-full-mobile is-half-tablet is-half-desktop">
            <Portfolio />
          </div>
          <div className="column is-full-mobile is-half-tablet is-half-desktop">
            <DeHeros />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default homeProject;
