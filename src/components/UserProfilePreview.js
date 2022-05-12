import { NavLink } from './StudentHeaderElements'
import './stylesheets/UserProfilePreview.css'

const UserProfilePreview = ({ name, promotion }) => {
  return (
    <NavLink to='/profile'>
      <div className='user-profile-preview'>
        <img
          className='user-profile-preview--picture'
          src='assets/img/janedoe.jpg'
          alt='Profile picture'
        />
        <div className='user-profile-preview--name'>{name}</div>
        <div className='user-profile-preview--promotion'>{promotion}</div>
      </div>
    </NavLink>
  )
}

export default UserProfilePreview