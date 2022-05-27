import { useContext } from 'react'
import { UserContext } from '../App'
import { NavLink } from './StudentHeaderElements'
import './stylesheets/UserProfilePreview.css'

const UserProfilePreview = () => {

  const { userInfo } = useContext(UserContext)

  return (userInfo &&
    <NavLink to='/profile'>
      <div className='user-profile-preview'>
        <img
          className='user-profile-preview--picture'
          src={
            !userInfo.profilePicture
              ? 'assets/img/user-profile-picture.png'
              : userInfo.profilePicture
          }
          alt='Profile picture'
        />
        <div className='user-profile-preview--name'>{ `${userInfo?.firstName} ${userInfo?.lastName}`}</div>
        <div className='user-profile-preview--promotion'>{userInfo?.promotion.name}</div>
      </div>
    </NavLink>
  )
}

export default UserProfilePreview