import { NavLink } from './StudentHeaderElements'
import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../App";
import './stylesheets/UserProfilePreview.css'

const UserProfilePreview = ({ name, promotion }) => {
  const { token, userInfo } = useContext(UserContext)
  const [picture, setPicture] = useState(' ')
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    if(userInfo){
      setPicture(userInfo.profilePicture);
    }
  },[userInfo])

  const reloadSrc = e => { 
    if(fallback){
      e.target.src = "assets/img/user-profile-picture.png";
    }else{
      e.target.src = picture
      setFallback(true)
    }
  }
  return (
    <NavLink to='/profile'>
      <div className='user-profile-preview'>
        <img
          className='user-profile-preview--picture'
          src={picture} onError={reloadSrc}
          alt='Profile picture'
        />
        <div className='user-profile-preview--name'>{name}</div>
        <div className='user-profile-preview--promotion'>{promotion}</div>
      </div>
    </NavLink>
  )
}

export default UserProfilePreview