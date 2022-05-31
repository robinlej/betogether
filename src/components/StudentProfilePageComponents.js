
import { HiOutlineUpload } from "react-icons/hi";
import styled from "styled-components";

export const ProfilePageMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ProfileImageUpload = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
  height: 30vh;
`

export const StudentProfileText = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`


export const UploadBtn = styled.div`
  border-radius: 5px;
  padding: 0.5em 1em;
  background: #63c3d1;
  color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
&:hover {
  transform: scale(1.1) perspective(1px);
}
&:active {
  transition: all 0.2s ease-in-out;
}
`;

export const UploadImg = styled(HiOutlineUpload)`
  color: #ffffff;
`;

export const StudentProfileMainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em;
  gap: 2rem;
`

export const StudentProfileDetailsReset = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
`

export const ChangePassword = styled.div`
  display: flex;
  color: white;
`

export const ChangePasswordDiv = styled.div`
  display: flex;
  gap: 16px;
`

