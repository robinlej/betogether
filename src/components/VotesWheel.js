// import { useEffect, useRef } from "react"
import {
  VotesWheelPageDiv,
  ProgressWheel,
  ProgressWheelNumber,
  CircleLineSvg,
  CircleLine,
  CircleLineSpinner,
  WaitForVotesText,
} from "./DashboardStep4PageComponents";

function VotesWheel({ votesSubmitted, totalVotes }) {
  return (
    <VotesWheelPageDiv>
      <ProgressWheel>
        <ProgressWheelNumber>
          {votesSubmitted} / {totalVotes}
          <CircleLineSvg>
            <CircleLine></CircleLine>
          </CircleLineSvg>
        </ProgressWheelNumber>
        <CircleLineSpinner></CircleLineSpinner>
      </ProgressWheel>
      <WaitForVotesText>
        <p> Wait until everybody else has voted! </p>
      </WaitForVotesText>
    </VotesWheelPageDiv>
  );
}

export default VotesWheel;
