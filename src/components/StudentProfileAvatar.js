import React from 'react'
import styled from "styled-components";

function StudentProfileAvatar() {
  return (
    <ProfileMainDiv>
        <img src='https://bit.ly/3FKSgvh' alt='avatar-icon' style={{"width":"50px", "height":"50px", "object-fit":"cover", "border-radius":"50%"}} />
        <UserInfo>
            <p style={{"font-weight":"bold"}}> Jane Doe</p>
            <p style={{"font-style":"italic"}}> Johnson 7</p>
        </UserInfo>
    </ProfileMainDiv>
  )
}

const ProfileMainDiv = styled.div`
    display:flex;
    gap: 1em;
    margin-top: 0.5em;
`
const UserInfo = styled.div`
    color: white;
`

export default StudentProfileAvatar