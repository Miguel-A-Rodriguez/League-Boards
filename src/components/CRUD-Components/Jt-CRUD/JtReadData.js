import firebase from "firebase";
import React, { useEffect, useState } from "react";
// import { useAuth } from "../../../contexts/AuthContext";
import "../../../css/discussion.css";
import JtPost from "./JtPost";

export default function JtReadData() {
  const [postList, setPostList] = useState();
  // const { currentUser } = useAuth();
  useEffect(() => {
    // const createPost = () => {
    //     const postRef = firebase.database().ref("Post");
    const postRef = firebase.database().ref("JtPost");
    postRef.on("value", (snapshot) => {
      const posts = snapshot.val();
      const postList = [];
      for (let id in posts) {
        postList.push({ id, ...posts[id] });
      }
      setPostList(postList);
    });
  }, []);

  return (
    <div>
      {postList
        ? postList.map((post, index) => <JtPost post={post} key={index} />)
        : ""}
    </div>
  );
}
