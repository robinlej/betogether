import React from "react";
import {Nav, NavLink, NavBtn, NavBtnLink, Logout} from './StudenProfileHeaderElements'
import logo from "../assets/logo-becode.png";

function StudentProfileHeader() {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={logo} style={{"height": "5rem"}} alt="Logo" />
        </NavLink>
        <NavBtn>
          <NavBtnLink to="/login"><Logout></Logout>Logout</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
}

export default StudentProfileHeader;
