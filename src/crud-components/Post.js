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
  // find user info function
  // function user() {
  //   const user = firebase.auth().currentUser;

  //   if (user != null) {
  //     user.providerData.forEach(function (profile) {
  //       console.log("Sign-in provider: " + profile.providerId);
  //       console.log("  Provider-specific UID: " + profile.uid);
  //       console.log("  Name: " + profile.displayName);
  //       console.log("  Email: " + profile.email);
  //       console.log("  Photo URL: " + profile.photoURL);
  //     });
  //   }
  // }
  return (
    <>
      {/* <button style={{ height: 200 }} onClick={user}></button> */}
      <div>
        <h1>{post?.title}</h1>
        <h2> {post?.content}</h2>
        <h3>Posted by: {post?.displayName}</h3>
        <h5>{post?.date}</h5>
      </div>
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
    </>
  );
}
