import React from "react";
import {Nav, NavLink, NavBtn, NavBtnLink, Logout} from './StudentHeaderElements'
import DashboardProgress from './DashboardProgress'
import UserProfilePreview from './UserProfilePreview'
// import StudentProfileAvatar from "./StudentProfileAvatar";
import logo from "../assets/logo-becode.png";
import { UploadBtn } from "./StudentProfilePageComponents";

function StudentHeader({ page, step }) {
  return (
    <>
      <Nav>
        <NavLink to="/welcome">
          <img src={logo} style={{"height": "5rem"}} alt="Logo" />
        </NavLink>
        { page === 'dashboard' && <DashboardProgress step={step} />}
        <div style={{"display":"flex", "gap":"4rem"}}>
        { (page !== 'profile' && page !== 'welcome') && <UserProfilePreview name="Jane Doe" promotion='Johnson 7' /> }
        <NavBtn>
        { page === 'welcome' && <NavLink to='/profile'><UploadBtn style={{ "marginRight":"2rem"}}>Edit my profile</UploadBtn></NavLink>}
        <NavLink to='/'><NavBtnLink><Logout></Logout>Logout</NavBtnLink></NavLink>
        </NavBtn>
        </div>
      </Nav>
    </>
  );
}

export default StudentHeader;
