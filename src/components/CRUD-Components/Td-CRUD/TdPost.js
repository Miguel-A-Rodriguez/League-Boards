import firebase from "firebase";
import React from "react";
import { useAuth } from "../../../contexts/AuthContext";
// update/delete posts

export default function TdPost({ post }) {
  const { currentUser } = useAuth();

  const updatePost = () => {
    const postRef = firebase.database().ref("TdPost").child(post.id);

    postRef.update();
  };

  const deletePost = () => {
    const postRef = firebase.database().ref("TdPost").child(post.id);
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
          onClick={
            currentUser.displayName === post?.displayName ? updatePost : null
          }
        >
          Edit
        </button>
      </div>
    </>
  );
}
