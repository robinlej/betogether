import { motion } from "framer-motion";
import styled from "styled-components";
import React from 'react'

function StudentProfileBackdrop({children, onClick}) {
  return (
    <BackdropDiv as={motion.div}
    onClick={onClick}
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    end={{opacity: 0}}
    >
    {children}
    </BackdropDiv>
  )
}


const BackdropDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: #000000e1;
    display: flex;
    align-items: center;
    justify-content: center;

`

export default StudentProfileBackdrop;
