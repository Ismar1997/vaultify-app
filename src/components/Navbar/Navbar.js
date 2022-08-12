import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { IconContext } from "react-icons";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
} from "./NavbarStyles.js";
import { data } from "../../data/NavbarData";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  let navigate = useNavigate();
  let location = useLocation();

  const handleClick = () => {
    setShow(!show);
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behaviour: "smooth",
    });
  };

  const closeMobileMenu = (to, id) => {
    if (id && location.pathname === "/") {
      scrollTo(id);
    }
    navigate(to);
    setShow(false);
  };

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/vaultify-app">
            <NavIcon src="./assets/logo.png" alt="logo" />
            Vaultify
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {" "}
            {show ? <FaTimes /> : <CgMenuRight />}{" "}
          </MobileIcon>
          <NavMenu show={show}>
            {data.map((val, index) => (
              <NavItem key={index}>
                <NavLinks onClick={() => closeMobileMenu(val.to, val.id)}>
                  {val.text}
                </NavLinks>
              </NavItem>
            ))}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
