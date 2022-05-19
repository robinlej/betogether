import { keyframes} from 'styled-components';
import styled from 'styled-components';

// Voting wheel components

export const VotesWheelPageDiv = styled.main`
  height: 100%;
  width: 100%;
  padding: 100px 0;
`;

export const ProgressWheel = styled.aside`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  font-weight: bold;
  font-size: 48px;
`;
export const ProgressWheelNumber = styled.div`
  width: min(100%, 320px);
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--blue-700);
  border-radius: 50%;
  position: fixed;
`;

export const CircleLineSvg = styled.svg`
  width: 130px;
  height: 130px;
  fill: none;
  position: absolute;
`;

export const CircleLine = styled.circle`
  cx: 65;
  cy: 65;
  r: 60;
  stroke-linecap: round;
  position: relative;
`;


// Spinning animation

export const Spinner = keyframes`
 100% {transform: rotate(360deg)}; 
`


export const CircleLineSpinner = styled.div`
  width: 6.7em;
  height: 6.7em;
  border-top: 0.2em solid #63C3D1;
  border-right: 0.2em solid #63C3D1;
  border-radius: 50%;
  margin: auto;
  animation: ${Spinner} 1s linear infinite;
  box-shadow: inset 0 0 0.5em hsl(188, 54%, 60%), 0 0 0.5em hsl(188, 54%, 60%);
`;

export const WaitForVotesText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  padding: 2em;
`

