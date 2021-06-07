import firebase from "firebase";
import React, { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";

export default function TmPost({ post }) {
  const { currentUser } = useAuth();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date] = useState(new Date());
  const [visible, setVisible] = useState(false);
  const [hide, setHide] = useState(true);
  const user = firebase.auth().currentUser;
  const [photo] = useState(currentUser.photoURL);

  if (user != null) {
    console.log(currentUser.photoURL);
  }
  // In order to update the imgage url in the node we must store current user url in
  // a constant.
  // Then we create an if check to see if currentUser photoURL is equal to the url in the node
  // if it is not equal to that of which is in the Node, we call the updatePhoto function
  // and pass photo
  const updatePhoto = () => {
    const postRef = firebase.database().ref("TmPost").child(post.id);
    if (post?.photo !== currentUser.photoURL) {
      postRef.update({ photo });
    }
  };

  // post?.photo !== currentUser.photoURL ? updatePhoto : post?.photo;
  const updateTitle = () => {
    const postRef = firebase.database().ref("TmPost").child(post.id);
    postRef.update({ title, date: date.toLocaleDateString() });
    window.location.reload();
  };
  const updateContent = () => {
    const postRef = firebase.database().ref("TmPost").child(post.id);
    postRef.update({ content, date: date.toLocaleDateString() });
    window.location.reload();
  };

  const deletePost = () => {
    const postRef = firebase.database().ref("TmPost").child(post.id);
    postRef.remove();
    window.location.reload();
  };
  // if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
  //   updatePhoto();
  // } else {
  //   console.info("This page is not reloaded");
  // }
  return (
    <>
      <div className="post-contents">
        <h1>{post?.title}</h1>
        <h2> {post?.content}</h2>
        <div>
          <img src={post?.photo} alt="" />
        </div>
        {hide && (
          <button
            style={{ display: "none" }}
            className={
              currentUser.displayName !== post?.displayName
                ? "hidden"
                : "!hidden"
            }
            onClick={
              currentUser.displayName === post?.displayName
                ? updatePhoto()
                : () => setHide(false)

              // currentUser.displayName === post?.displayName ? updatePhoto : null
            }
          >
            Update Profile Picture
          </button>
        )}
        <h3>Posted by: {post?.displayName}</h3>
        <h4>Posted on:</h4>
        <h5>{post?.date}</h5>
        <button
          className={
            currentUser.displayName !== post?.displayName ? "hidden" : "!hidden"
          }
          onClick={
            currentUser.displayName === post?.displayName ? deletePost : null
          }
        >
          Delete
        </button>
        <button
          className={
            currentUser.displayName !== post?.displayName ? "hidden" : "!hidden"
          }
          onClick={
            currentUser.displayName === post?.displayName
              ? () => setVisible(!visible)
              : null
          }
        >
          Edit
        </button>
        {visible && (
          <>
            <aside className="post-buttons">
              <input
                type="text"
                onChange={(event) => setTitle(event.target.value)}
                value={title}
              />
              <button onClick={updateTitle}>Update Title</button>
            </aside>
            <aside class="post-buttons">
              <input
                type="text"
                onChange={(event) => setContent(event.target.value)}
                value={content}
              />
              <button onClick={updateContent}>Update Content</button>
            </aside>
          </>
        )}
      </div>
    </>
  );
}
