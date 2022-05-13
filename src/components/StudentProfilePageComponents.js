
import { HiOutlineUpload } from "react-icons/hi";
import styled from "styled-components";
import background from "../assets/Website_background.png";

export const ProfileImageUpload = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
  height: 30vh;
  width: 30vw;
`

export const StudentProfileText = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 48px;
`

export const PageBackground = styled.div`
  background-image: url(${background});
  height: 100vh;
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
`

export const StudentProfileDetailsReset = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  width: 70vw;
`

export const ChangeEmail = styled.div`
  display: flex;
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
export const ChangeEmailDiv = styled.div`
  display: flex;
  gap: 16px;
`
