import firebase from "firebase";
import React, { useState } from "react";
import "../css/profilepicture.css";

const ProfilePicture = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");

  const user = firebase.auth().currentUser;
  // useeffect dosent seem to change the currently rendered photo on the page
  // React.useEffect(() => {}, [user]);

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
                // console.log(user.photoURL);
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

      <img
        src={
          user.photoURL
            ? user.photoURL
            : "https://firebasestorage.googleapis.com/v0/b/league-boards.appspot.com/o/images%2Fgolem.jpg?alt=media&token=002001a9-96e0-400e-be1a-2a022f626983"
        }
        alt="profile-pic"
      />
      {/* <img src={user ? user.photoURL : null} alt="profile-pic" /> */}
      <input type="file" onChange={handleChange} />
      {/* <label for="img">Click me to upload a 300x300 profile image</label> */}
      <button
        style={{ marginTop: "10px" }}
        onClick={image ? handleUpload : null}
      >
        Set Profile Picture
      </button>
    </div>
  );
};
export default ProfilePicture;
// render(<ProfilePicture />), document.querySelector("#root");
// why is this not needed?
