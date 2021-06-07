import firebase from "firebase";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import "../../../css/discussion.css";

export default function TmCreateThread() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const user = firebase.auth().currentUser;
  const [photo] = useState(user.photoURL);
  const { currentUser } = useAuth();
  const [date, setDate] = useState(new Date());
  //  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const createPost = () => {
    const postRef = firebase.database().ref("TmPost");
    const post = {
      title,
      content,
      date: date.toLocaleDateString(),
      email: currentUser.email,
      displayName: currentUser.displayName,
      photo,
    };
    console.log(date);
    postRef.push(post);
  };
  return (
    <>
      <div className="post-creation-items">
        <input
          type="text"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />

        <input
          type="text"
          onChange={(event) => setContent(event.target.value)}
          value={content}
        />
        <button id="post-button" onClick={createPost}>
          Add post
        </button>
      </div>
    </>
  );
}
