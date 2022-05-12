import React from "react";
import {
  UploadBtn,
  UploadImg,
  PageBackground,
} from "../components/StudentProfilePageComponents";
import StudentProfileHeader from "../components/StudentProfileHeader";
import background from "../assets/Website_background.png";
import "./StudentProfilePage.css";

function StudentProfilePage() {
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
    <PageBackground>
      <StudentProfileHeader />
      <div className="student-profile-maintext">
        <h1> My profile</h1>
        <p> Welcome Jane</p>
        <p> You are a student in the Johnson 7 promotion</p>
      </div>
      <div className="student-profile-imageupload">
        <h4>Profile Picture</h4>
        <UploadBtn>
          <UploadImg></UploadImg>Upload
        </UploadBtn>
      </div>
      <div className="student-profile-edit"></div>
    </PageBackground>
  );
}

export default StudentProfilePage;
