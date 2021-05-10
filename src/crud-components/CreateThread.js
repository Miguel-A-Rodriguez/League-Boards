import firebase from "firebase";
import React, { useState } from "react";
export default function CreateThread() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // var app = firebase.initializeApp({});
  // const handleOnChange = (e) => {
  //   setTitle(e.target.value);
  //   setContent(e.target.value);
  // };
  const createPost = () => {
    const postRef = firebase.database().ref("Post");
    const post = {
      title,
      content,
    };
    postRef.push(post);
  };
  return (
    <div>
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
      <button onClick={createPost}>Add post</button>
    </div>
  );
}
