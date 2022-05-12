import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { IoExitOutline } from "react-icons/io5";

export const Nav = styled.nav`
  background: #092b47;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  z-index: 10;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1 rem;
  height: 5 rem;
  cursor: pointer;
`;

export const Logout = styled(IoExitOutline)`
  color: #ffffff;
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
`;

export const NavBtnLink = styled.div`
  border-radius: 5px;
  padding: 0.5em 1em;
  background: #ee964b;
  color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  display: flex;
  align-items: center;
  &:hover{
    transform: scale(1.1) perspective(1px)
  }
  &:active {
    transition: all 0.2s ease-in-out;
  }
`;
