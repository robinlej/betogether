import { useContext } from 'react'
import { UserContext } from '../App'
import { NavLink } from './StudentHeaderElements'
import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../App";
import './stylesheets/UserProfilePreview.css'

const UserProfilePreview = () => {
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
  return (userInfo &&
    <NavLink to='/profile'>
      <div className='user-profile-preview'>
        <img
          className='user-profile-preview--picture'
          src={picture} onError={reloadSrc}
          alt='Profile picture'
        />
        <div className='user-profile-preview--name'>{ `${userInfo?.firstName} ${userInfo?.lastName}`}</div>
        <div className='user-profile-preview--promotion'>{userInfo?.promotion.name}</div>
      </div>
    </NavLink>
  )
}

export default UserProfilePreview