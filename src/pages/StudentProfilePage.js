import { useState, useContext, useEffect } from "react";
import {
  UploadBtn,
  UploadImg,
  StudentProfileText,
  ProfileImageUpload,
  StudentProfileMainDiv,
  StudentProfileDetailsReset,
  ChangePassword,
  ChangePasswordDiv,
  ProfilePageMain,
} from "../components/StudentProfilePageComponents";
import StudentHeader from "../components/StudentHeader";
import StudentProfileModal from "../components/StudentProfileModal";
import { UserContext } from "../App";
import { HoldSpinner } from "../components/HoldSpinner";
import showWidget from "../components/CloudinaryWidget";

function StudentProfilePage() {
  const [openModal, setOpenModal] = useState(false);
  const { token, userInfo, setUserInfo } = useContext(UserContext);
  // const [password, setPassword] = useState(" ");
  // const [newpassword, setNewPassword] = useState(" ");
  const [picture, setPicture] = useState(" ");
  const [fallback, setFallback] = useState(false);

  let refreshPage = async () => {
    window.location.reload();
  };

  const handleClick = async () => {
    let profilePicture = await showWidget("UserProfilePicture", token);
    await setUserInfo({
      ...userInfo,
      profilePicture: profilePicture.profile_picture,
    });
    await refreshPage();
  };

  useEffect(() => {
    if (userInfo) {
      setPicture(userInfo.profilePicture);
    }
  }, [userInfo]);

  const reloadSrc = (e) => {
    if (fallback) {
      e.target.src = "assets/img/user-profile-picture.png";
    } else {
      e.target.src = picture;
      setFallback(true);
    }
  };

  return userInfo ? (
    <>
      <StudentHeader page="profile" />
      <ProfilePageMain>
        <StudentProfileText>
          <h1> My profile</h1>
          <p> Hello {`${userInfo.firstName}`}</p>
          <p> You are a student in the Johnson 7 promotion</p>
        </StudentProfileText>
        <StudentProfileMainDiv>
          <ProfileImageUpload>
            <h4>Profile Picture</h4>
            <img
              src={picture}
              onError={reloadSrc}
              alt="ProfilePicture"
              style={{ height: "150px" }}
            />
            <UploadBtn onClick={handleClick}>
              <UploadImg></UploadImg>Upload
            </UploadBtn>
          </ProfileImageUpload>
          <StudentProfileDetailsReset>
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
                    style={{ width: "350px", padding: "1em" }}
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
      </ProfilePageMain>
    </>
  ) : (
    <HoldSpinner />
  );
}

export default StudentProfilePage;
