import firebase from "firebase";
import React from "react";
import { useAuth } from "../contexts/AuthContext";
// update/delete posts

export default function Post({ post }) {
  const { currentUser } = useAuth();

  const updatePost = () => {
    const postRef = firebase.database().ref("Post").child(post.id);

    postRef.update();
  };

  const deletePost = () => {
    const postRef = firebase.database().ref("Post").child(post.id);
    postRef.remove();
  };
  return (
    <>
      <div>
        <h1>{post?.title}</h1>
        <h2> {post?.content}</h2>
        <h5>{post?.email}</h5>
        <h5>{post?.date}</h5>
      </div>
      <button
        className={currentUser.email !== post?.email ? "hidden" : "!hidden"}
        onClick={deletePost}
      >
        Delete
      </button>
      <button
        className={currentUser.email !== post?.email ? "hidden" : "!hidden"}
        onClick={updatePost}
      >
        Edit
      </button>
    </>
  );
}
