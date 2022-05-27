import React, { useContext } from "react";
import {Nav, NavLink, NavBtn, NavBtnLink, Logout} from './StudentHeaderElements'
import DashboardProgress from './DashboardProgress'
import UserProfilePreview from './UserProfilePreview'
import { UploadBtn } from "./StudentProfilePageComponents";
import { setCookie, UserContext } from "../App";
import logo from "../assets/logo-becode.png";

function StudentHeader({ page, step }) {
  const {setToken} = useContext(UserContext)

  const signOut = () => {
    setToken(null)
    setCookie('token', '', 0)
  }

  return (
    <>
      <Nav>
        <NavLink to="/welcome">
          <img src={logo} style={{"height": "5rem"}} alt="Logo" />
        </NavLink>
        { page === 'dashboard' && <DashboardProgress step={step} />}
        <div style={{"display":"flex", "gap":"4rem"}}>
          { (page !== 'profile' && page !== 'welcome') && <UserProfilePreview /> }
          <NavBtn>
            { page === 'welcome' && (
              <NavLink to='/profile'>
                <UploadBtn style={{ "marginRight":"2rem"}}>Edit my profile</UploadBtn>
              </NavLink>
            )}
            <NavLink to='/' onClick={signOut}>
              <NavBtnLink><Logout /> Logout</NavBtnLink>
            </NavLink>
          </NavBtn>
        </div>
      </Nav>
    </>
  );
}

export default StudentHeader;
