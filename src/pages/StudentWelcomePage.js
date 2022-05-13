import React from "react";
import StudentHeader from "../components/StudentHeader";
import {
  WelcomePageMainDiv,
  WelcomePageDiv,
  WelcomePageProfilePic,
  WelcomePageTitleDiv,
  PastProjectsTitle,
  PastProjectsContainer,
  WelcomePagePromotionFlag,
  WelcomePageProfileDiv,
  //   NoProjectsSpider,
  //   NoProjectsSpiderDiv
} from "../components/StudentWelcomePageComponents";
import { UploadBtn } from "../components/StudentProfilePageComponents";
import { NavLink } from "../components/StudentHeaderElements";

function StudentWelcomePage() {
  //   const [users, usersSet] = React.useState([]);

  //   React.useEffect(() => {
  //     async function fetchUsers() {
  //       const fullResponse = await fetch('/url');
  //       const responseJson = await fullResponse.json();
  //       usersSet(responseJson.data);
  //     }

  //     fetchUsers();
  //   }, []);
  return (
    <>
      <StudentHeader page="welcome" />
      <WelcomePageMainDiv>
        <WelcomePageDiv>
          <WelcomePageProfileDiv>
            <WelcomePagePromotionFlag>
              <p style={{ "font-weight": "bold" }}>Johnsons 7</p>
            </WelcomePagePromotionFlag>
            <WelcomePageProfilePic></WelcomePageProfilePic>
          </WelcomePageProfileDiv>
          <WelcomePageTitleDiv>
            <h1>Welcome Jane Doe</h1>
            <p> Your coach has started a new group project</p>
            <div>
              <NavLink to="/dashboard">
                <UploadBtn>+ Add your project </UploadBtn>
              </NavLink>
            </div>
          </WelcomePageTitleDiv>
        </WelcomePageDiv>
        <div>
          <PastProjectsTitle>
            <h2>Past group projects</h2>
          </PastProjectsTitle>
          <PastProjectsContainer>
            {/* <NoProjectsSpiderDiv><NoProjectsSpider></NoProjectsSpider></NoProjectsSpiderDiv> */}
            <p>
              Looks a bit dusty in here, you don't have past projects. Why don't
              you add one?
            </p>
          </PastProjectsContainer>
        </div>
      </WelcomePageMainDiv>
    </>
  );
}

export default StudentWelcomePage;
