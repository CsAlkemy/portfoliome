import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { FaGithub } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
} from "./Navbar.elements";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <h1 className="heroFont">Alkemy Hossain</h1>
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={closeMobileMenu} click={click}>
              <NavItem>
                <NavLinks to="/" onClick={closeMobileMenu}>
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/project" onClick={closeMobileMenu}>
                  Projects
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/research" onClick={closeMobileMenu}>
                  Research
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/blog" onClick={closeMobileMenu}>
                  Blog
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/contact" onClick={closeMobileMenu}>
                  Contact
                </NavLinks>
              </NavItem>
              <NavItemBtn>
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
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
