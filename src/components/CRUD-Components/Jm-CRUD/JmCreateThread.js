import firebase from "firebase";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import "../../../css/discussion.css";
// import { useAuth } from "../contexts/AuthContext";
export default function JmCreateThread() {
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
    const postRef = firebase.database().ref("JmPost");
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
          placeholder="Title"
          type="text"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />

        <textarea
          placeholder="Content"
          wrap="hard"
          rows="5"
          cols="33"
          onChange={(event) => setContent(event.target.value)}
          value={content}
        ></textarea>
        <button
          disabled={title == "" || content == "" ? true : false}
          id="post-button"
          onClick={createPost}
        >
          Add post
        </button>
      </div>
    </>
  );
}
