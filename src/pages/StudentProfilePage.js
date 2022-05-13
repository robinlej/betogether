import { useState } from "react";
import {
  UploadBtn,
  UploadImg,
  PageBackground,
  StudentProfileText,
  ProfileImageUpload,
  StudentProfileMainDiv,
  StudentProfileDetailsReset,
  ChangeEmail,
  ChangePassword,
  ChangePasswordDiv,
  ChangeEmailDiv,
} from "../components/StudentProfilePageComponents";
import StudentHeader from "../components/StudentHeader";
import StudentProfileModal from "../components/StudentProfileModal";

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

  // const [email, setEmail] = useState(" ");
  // const [password, setPassword] = useState(" ");
  // const [newpassword, setNewPassword] = useState(" ");
  const [openModal, setOpenModal] = useState(false);

  const showWidget = () => {
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: `georgianam22`,
        uploadPreset: `sphkiz4b`,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log(result.info.url);
        }
      }
    );
    widget.open();
  };

  return (
    <PageBackground>
      <StudentHeader page="profile" />
      <StudentProfileText>
        <h1> My profile</h1>
        <p> Welcome Jane</p>
        <p> You are a student in the Johnson 7 promotion</p>
      </StudentProfileText>
      <StudentProfileMainDiv>
        <ProfileImageUpload>
          <h4>Profile Picture</h4>
          <img
            src="https://bit.ly/3FKSgvh"
            alt="ProfilePicture"
            style={{ height: "150px" }}
          />
          <UploadBtn onClick={showWidget}>
            <UploadImg></UploadImg>Upload
          </UploadBtn>
        </ProfileImageUpload>
        <StudentProfileDetailsReset>
          <ChangeEmail>
            <form method="POST" action="/">
              <label>E-mail</label>
              <br />
              <ChangeEmailDiv>
                <input name="email" type="text" style={{ width: "350px" }} />
                <UploadBtn
                  onClick={() => {
                    setOpenModal(true);
                  }}
                >
                  Change e-mail
                </UploadBtn>
              </ChangeEmailDiv>
            </form>
          </ChangeEmail>
          <ChangePassword>
            <form method="POST" action="/">
              <label>New password</label>
              <br />
              <input
                name="password"
                type="password"
                style={{ width: "350px", padding: "1em" }}
              />
              <br />
              <label>Confirm new password</label>
              <br />
              <ChangePasswordDiv>
                <input
                  name="retype-password"
                  type="password"
                  style={{ width: "350px" }}
                />
                <UploadBtn
                  onClick={() => {
                    setOpenModal(true);
                  }}
                >
                  Change password
                </UploadBtn>
              </ChangePasswordDiv>
            </form>
          </ChangePassword>
        </StudentProfileDetailsReset>
      </StudentProfileMainDiv>
      {openModal && <StudentProfileModal CloseModal={setOpenModal} />}
    </PageBackground>
  );
}

export default StudentProfilePage;
