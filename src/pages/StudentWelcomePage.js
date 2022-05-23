import React from "react";
// import { v4 as uuidv4 } from "uuid";
import StudentHeader from "../components/StudentHeader";
import {
  WelcomePageMainDiv,
  WelcomePageDiv,
  WelcomePageProfilePic,
  WelcomePageTitleDiv,
  PastProjectsTitle,
  PastProjectsContainer,
  WelcomePagePromotionFlag,
  WelcomePageProfileDiv
  // PastProjectCard,
  // PastProjectImage,
  // PastProjectCardOverlay,
  // PastProjectsMainDiv,
} from "../components/StudentWelcomePageComponents";
import { UploadBtn } from "../components/StudentProfilePageComponents";
import { NavLink } from "../components/StudentHeaderElements";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";

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

  // const pastProjects = [
  //   {
  //     title: "Amazing Project",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum metus est, sagittis varius neque facilisis eget. Aliquam suscipit suscipit erat. ",
  //     image:
  //       "https://cdn.dribbble.com/userupload/2740172/file/original-dc610debd5d16ea215476b9b3f3959e1.png?filters:format(webp)?filters%3Aformat%28webp%29=&compress=1&resize=2400x1800",
  //   },
  //   {
  //     title: "Great Project",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum metus est, sagittis varius neque facilisis eget. Aliquam suscipit suscipit erat. ",
  //     image:
  //       "https://cdn.dribbble.com/users/5922214/screenshots/18277526/media/4f547737df3c49b77d0feb10735b52a8.png?compress=1&resize=1200x900&vertical=top",
  //   },
  //   {
  //     title: "Superb Project",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum metus est, sagittis varius neque facilisis eget. Aliquam suscipit suscipit erat. ",
  //     image:
  //       "https://cdn.dribbble.com/users/5922214/screenshots/18191799/media/703b8c5cdd933586cfd92c8dfbdeb449.png?compress=1&resize=1200x900&vertical=top",
  //   },
  //   {
  //     title: "Terrific Project",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum metus est, sagittis varius neque facilisis eget. Aliquam suscipit suscipit erat. ",
  //     image:
  //       "https://cdn.dribbble.com/users/5922214/screenshots/18191838/media/24575743db9bbb2bd5388321c4780e0e.png?compress=1&resize=1200x900&vertical=top",
  //   },
  // ];

  return (
    <>
      <StudentHeader page="welcome" />
      <WelcomePageMainDiv>
        <WelcomePageDiv>
          <WelcomePageProfileDiv>
            <WelcomePagePromotionFlag>
              <p style={{ fontWeight: "bold" }}>Johnsons 7</p>
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
            {/* If there are no past project the text will be generated automatically */}
            <p>
              Looks a bit dusty in here, you don't have past projects. Why don't
              you add one?
            </p>
            {/* If there are past projects, then the cards will be populated with the image and title of it */}
            {/* <PastProjectsMainDiv>
              <Splide
                options={{
                  perPage: 2,
                  rewind: true,
                  width: "820px",
                  gap: "0.5em",
                }}
                aria-labelledby="past-projects"
              >
                {pastProjects.map((project) => {
                  return (
                    <SplideSlide key={uuidv4()}>
                      <PastProjectCard>
                        <PastProjectImage src={project.image} />
                        <PastProjectCardOverlay>
                          <h1>{project.title}</h1>
                          <p>{project.description}</p>
                        </PastProjectCardOverlay>
                      </PastProjectCard>
                    </SplideSlide>
                  );
                })}
              </Splide>
            </PastProjectsMainDiv> */}
          </PastProjectsContainer>
        </div>
      </WelcomePageMainDiv>
    </>
  );
}

export default StudentWelcomePage;
