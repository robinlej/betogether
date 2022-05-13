import React from "react";
import {Nav, NavLink, NavBtn, NavBtnLink, Logout} from './StudentHeaderElements'
import DashboardProgress from './DashboardProgress'
import UserProfilePreview from './UserProfilePreview'
import StudentProfileAvatar from "./StudentProfileAvatar";
import logo from "../assets/logo-becode.png";

function StudentHeader({ page, step }) {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={logo} style={{"height": "5rem"}} alt="Logo" />
        </NavLink>
        { page === 'dashboard' && <DashboardProgress step={step} />}
        <div style={{"display":"flex", "gap":"4rem"}}>
        { page !== 'profile' && <UserProfilePreview name="Jane Doe" promotion='Johnson 7' /> }
        <NavBtn>
          <NavBtnLink to="/login"><Logout></Logout>Logout</NavBtnLink>
        </NavBtn>
        </div>
      </Nav>
    </>
  );
}

export default StudentHeader;
