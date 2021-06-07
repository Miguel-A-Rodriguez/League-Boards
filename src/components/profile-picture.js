import firebase from "firebase";
import React, { useState } from "react";
import "../css/profilepicture.css";

const ProfilePicture = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");

  const user = firebase.auth().currentUser;

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = firebase
      .storage()
      .ref(`images/${image.name}`)
      .put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        firebase
          .storage()
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
            // return (url);
            // console.log(url);
            user
              .updateProfile({
                photoURL: url,
              })
              .then(function () {
                window.location.reload();
              })
              .catch(function (error) {
                console.log("an error occured setting the user ");
              });
          });
      }
    );
  };

  return (
    <div class="photo-selector-container">
      <br />
      <img src={user ? user.photoURL : null} alt="profile-pic" />
      <input type="file" onChange={handleChange} />
      <button style={{ marginTop: "10px" }} onClick={handleUpload}>
        Upload{" "}
      </button>
    </div>
  );
};
export default ProfilePicture;
// render(<ProfilePicture />), document.querySelector("#root");
