import React from "react";
import {Nav, NavLink, NavBtn, NavBtnLink, Logout} from './StudentHeaderElements'
import DashboardProgress from './DashboardProgress'
import UserProfilePreview from './UserProfilePreview'
import logo from "../assets/logo-becode.png";

function StudentHeader({ page }) {

  return (
    <header>
      <Nav>
        <NavLink to='/'>
          <img src={logo} style={{ height: '5rem' }} alt='Logo' />
        </NavLink>
        { page === 'dashboard' && <DashboardProgress />}
        <div style={{"display":"flex", "gap":"4rem"}}>
          { page !== 'profile' && <UserProfilePreview name='Jane Doe' promotion='Johnson 7' /> }
          <NavBtn>
            <NavBtnLink to='/login'>
              <Logout></Logout>Logout
            </NavBtnLink>
          </NavBtn>
        </div>
      </Nav>
    </header>
  )
}

export default StudentHeader;
