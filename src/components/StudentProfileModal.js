import React from "react";
import styled from "styled-components";
import { NavBtnLink } from "./StudentHeaderElements";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import StudentProfileBackdrop from "./StudentProfileBackDrop";

function StudentProfileModal({ CloseModal }) {
  return (
    <StudentProfileBackdrop as={motion.div} onClick={CloseModal}>
      <ModalBackground onClick={(e) => e.stopPropagation()}>
        <ModalContainer>
          <ModalCloseButton>
            <ModalXButton onClick={() => CloseModal(false)}></ModalXButton>
          </ModalCloseButton>
          <ModalTitle>
            <p>To confirm changes, please enter your current password</p>
          </ModalTitle>
          <input
            name="enterpassword"
            type="password"
            style={{ width: "350px", padding: "1em" }}
          />
          <div>
            <NavBtnLink>Confirm</NavBtnLink>
          </div>
        </ModalContainer>
      </ModalBackground>
    </StudentProfileBackdrop>
  );
}

const ModalBackground = styled.div`
  width: clamp (50%, 700px, 90%);
  height: min (50%, 300px);
  margin: auto;
  padding: 0 2 rem;
  border-radius: 12px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: transparent;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const ModalContainer = styled.div`
  width: 584px;
  height: 302px;
  border-radius: 12px;
  background: rgba(19, 61, 96, 0.95);
  box-shadow: rgba (0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
`;

const ModalTitle = styled.div`
  color: white;
  display: inline-block;
  text-align: center;
  margin: 10px;
  font-weight: bold;
`;

const ModalCloseButton = styled.div`
  display: flex;
  align-self: end;
`;

const ModalXButton = styled(AiOutlineClose)`
  margin-top: -3em;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: white;
  font-weight: bold;
`;

export default StudentProfileModal;
