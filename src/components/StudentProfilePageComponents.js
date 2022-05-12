
import { HiOutlineUpload } from "react-icons/hi";
import styled from "styled-components";
import background from "../assets/Website_background.png";

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