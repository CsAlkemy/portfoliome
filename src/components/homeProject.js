import React from "react";

import "./style.scss";


import EasyInvoice from "./easy_invoice";
import Tourgo from "./tourgo";

const homeProject = (props) => (
  <section className="hero is-medium primaryColor">
    <div className="hero-body py-5">
      <div className="container ">
        <h1 className="title has-text-white ">Projects</h1>
        <p className="suntitle has-text-white">
          Here you will find some of my personal projects I've worked on and
          built over the years.
        </p>
        <Tourgo/>
        <EasyInvoice />
      </div>
    </div>
  </section>
);

export default homeProject;
