import React from "react";
import {Nav, NavLink, NavBtn, NavBtnLink, Logout} from './StudentHeaderElements'
import logo from "../assets/logo-becode.png";
import StudentProfileAvatar from "./StudentProfileAvatar";

function StudentHeader({page}) {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={logo} style={{"height": "5rem"}} alt="Logo" />
        </NavLink>
        <div style={{"display":"flex", "gap":"4rem"}}>
        { page === 'profile' && < StudentProfileAvatar /> }
        <NavBtn>
          <NavBtnLink to="/login"><Logout></Logout>Logout</NavBtnLink>
        </NavBtn>
        </div>
      </Nav>
    </>
  );
}

export default StudentHeader;
