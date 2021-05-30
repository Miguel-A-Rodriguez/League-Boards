import firebase from "firebase";
import { default as React, useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
// update/delete posts

export default function TtPost({ post }) {
  const { currentUser } = useAuth();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date] = useState(new Date());

  const updateTitle = () => {
    const postRef = firebase.database().ref("TtPost").child(post.id);
    postRef.update({ title, date: date.toLocaleDateString() });
  };

  const updateContent = () => {
    const postRef = firebase.database().ref("TtPost").child(post.id);
    postRef.update({ content, date: date.toLocaleDateString() });
  };

  const deletePost = () => {
    const postRef = firebase.database().ref("TtPost").child(post.id);
    postRef.remove();
  };

  return (
    <>
      {/* <button style={{ height: 200 }} onClick={user}></button> */}
      <div className="post-contents">
        <h1>{post?.title}</h1>
        <h2> {post?.content}</h2>
        <h3>Posted by: {post?.displayName}</h3>
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
          // onClick={
          //   currentUser.displayName === post?.displayName ? updatePost : null
          // }
        >
          Edit
        </button>
        <div>
          <input
            type="text"
            onChange={(event) => setTitle(event.target.value)}
            value={title}
          />
          <button id="update-button" onClick={updateTitle}>
            UpdateTitle
          </button>
          <input
            type="text"
            onChange={(event) => setContent(event.target.value)}
            value={content}
          />
          <button onClick={updateContent}>Update Content</button>
        </div>
      </div>
    </>
  );
}
