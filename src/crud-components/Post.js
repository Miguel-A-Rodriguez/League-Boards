import firebase from "firebase";
import React from "react";

// update/delete posts

export default function Post({ post }) {
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
        <h1 style={{ color: "red" }}>{post?.title}</h1>
        <h2 style={{ color: "red" }}> {post?.content}</h2>
      </div>
      <button onClick={deletePost}>Delete</button>
      <button onClick={updatePost}>Complete</button>
    </>
  );
}
