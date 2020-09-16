import React from "react";

import "./style.scss";
import heroImage from "../images/banner/devheros.png";
import project2 from "../images/banner/champcafe.png";

import {  FaNodeJs } from "react-icons/fa";
import {  GrGatsbyjs } from "react-icons/gr";


const homeProject = (props) => (
  <section className="hero is-medium primaryColor">
    <div className="hero-body py-5">
      <div className="container ">
        <h1 className="title has-text-white ">Projects</h1>
        <p className="suntitle has-text-white">
          Here you will find some of my personal projects I've worked on and
          built over the years.
        </p>

        <div className="card mt-4 card_Style">
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className='customImage'>
                  <img src={project2}  className='customImage' alt='project one banner'></img>
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4 has-text-white ">Tourgo!</p>
                <p className="subtitle is-6 has-text-white">hhh</p>
                <div className="tags has-addons">
                  <span className='tag'>NodeJs</span>
                  <span className='tag is-info'><FaNodeJs></FaNodeJs></span>
                </div>
                <div className="tags has-addons">
                  <span className='tag'>Gatsby</span>
                  <span className='tag is-info'><GrGatsbyjs></GrGatsbyjs></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card mt-4 card_Style">
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className='customImage'>
                  <img src={heroImage}  className='customImage' alt='project one banner'></img>
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4 has-text-white ">Tourgo!</p>
                <p className="subtitle is-6 has-text-white">hhh</p>
                <div className="tags has-addons">
                  <span className='tag'>NodeJs</span>
                  <span className='tag is-info'><FaNodeJs></FaNodeJs></span>
                </div>
                <div className="tags has-addons">
                  <span className='tag'>Gatsby</span>
                  <span className='tag is-info'><GrGatsbyjs></GrGatsbyjs></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default homeProject;
