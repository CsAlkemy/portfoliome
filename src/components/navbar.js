import React from "react";
import { FaGithub } from "react-icons/fa";

import "./style.scss";
import { Link } from "gatsby";

const Navbar = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="container">
      <div className="navbar-brand">
        <Link className="navbar-item " to="/">
          <h1 className="heroFont">Alkemy Hossain</h1>
        </Link>
        <Link
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Link>
      </div>
      <div id="navbarBasicExample" className="navbar-menu is-active">
        <div className="navbar-end">
          <Link className="navbar-item" to="/">
            Home
          </Link>
          <Link className="navbar-item" to="/project">
            Project
          </Link>
          <Link className="navbar-item" to="/">
            Research
          </Link>

          <Link className="navbar-item" to="/blog">
            Blog
          </Link>
          <Link className="navbar-item" to="/contact">
            Contact
          </Link>
          <div className="navbar-item">
            <div className="">
              <a
                className="button is-dark"
                href="https://github.com/CsAlkemy"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub></FaGithub>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
