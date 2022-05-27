// Function to prompt the Cloudinary widget to upload files

const showWidget = async (folder, token) => {
  let widget = await window.cloudinary.createUploadWidget(
    {
      cloudName: "georgianam22",
      uploadPreset: "be_together_app",
      folder: folder,
      sources: ["local"],
      cropping: true,
      styles: {
        palette: {
          window: "#0B253A",
          windowBorder: "#FFFFFF",
          tabIcon: "#63C3D1",
          menuIcons: "#63C3D1",
          textDark: "#FFFFFF",
          textLight: "#FFFFFF",
          link: "#63C3D1",
          action: "#63C3D1",
          inactiveTabIcon: "#CCCCCC",
          error: "#F44235",
          inProgress: "#0078FF",
          complete: "#20B832",
          sourceBg: "#133D60",
        },
      },
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        let url = result.info.url

        if (folder === "UserProfilePicture") {
          fetch("https://be-together-backend.herokuapp.com/users/profile", {
            method: "PATCH",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${token}`,
            },
            body: JSON.stringify({
              profile_picture: url,
            }),
          })
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              console.log(data)
            })
            .catch((err) => {
              console.error(err);
            });
        } else if (folder === "UserMockupImages") {

        } else if (folder === "UserDbSchemaImages") {

        }
      }
    }
  );
  await widget.open();
};

export default showWidget;
