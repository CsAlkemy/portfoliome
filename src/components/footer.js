import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import "./style.scss";

const Footer = () => (
  <div>
    <footer className="footer hero is-small is-bold is-black">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-mobile is-desktop ">
              <p className="title is-4"> Contact</p>
              <a href="https://github.com/CsAlkemy" rel='noreferrer' target='_blank'>
                <i className="has-text-white ">
                  {" "}
                  <FaGithub />
                </i>
              </a>
              &nbsp; &nbsp;
              <a href="https://www.linkedin.com/in/aalkemy/" rel='noreferrer' target='_blank'>
                <span className="">
                  <i className="has-text-white ">
                    {" "}
                    <FaLinkedin />
                  </i>
                </span>
              </a>
              &nbsp; &nbsp;
              <a href="https://twitter.com/dev_heros" rel='noreferrer' target='_blank'>
                <i className="has-text-white ">
                  {" "}
                  <FaTwitterSquare />
                </i>
              </a>{" "}
              &nbsp;&nbsp;
              <a href="https://www.facebook.com/mah.hridoy.5/" rel='noreferrer' target='_blank'>
                <i className="has-text-white ">
                  {" "}
                  <FaFacebook />
                </i>
              </a>{" "}
              &nbsp;&nbsp;
            </div>
            <div className="column is-full-mobile">
              <p className="title is-6 has-font-weight-light"> &copy; Alkemy Hossain</p>
              <p className="title is-7 has-text-white has-text-weight-light"> Made with <span role='img' aria-label='love-sign' style={{color : 'red'}}>♥</span> </p>

            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
);
export default Footer;
