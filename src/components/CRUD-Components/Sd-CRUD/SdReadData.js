import firebase from "firebase";
import React, { useEffect, useState } from "react";
// import { useAuth } from "../../../contexts/AuthContext";
import "../../../css/discussion.css";
import SdPost from "./SdPost";

export default function SdReadData() {
  const [postList, setPostList] = useState();
  // const { currentUser } = useAuth();
  useEffect(() => {
    // const createPost = () => {
    //     const postRef = firebase.database().ref("Post");
    const postRef = firebase.database().ref("SdPost");
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
        ? postList.map((post, index) => <SdPost post={post} key={index} />)
        : ""}
    </div>
  );
}
