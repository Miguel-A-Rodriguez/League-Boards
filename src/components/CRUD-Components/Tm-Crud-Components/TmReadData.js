import firebase from "firebase";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import "../../../css/discussion.css";
import TmPost from "./TmPost";

export default function ReadData() {
  const [postList, setPostList] = useState();
  const { currentUser } = useAuth();
  useEffect(() => {
    // const createPost = () => {
    //     const postRef = firebase.database().ref("Post");
    const postRef = firebase.database().ref("TmPost");
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
        ? postList.map((post, index) => <TmPost post={post} key={index} />)
        : ""}
    </div>
  );
}
