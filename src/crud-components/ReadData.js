import firebase from "firebase";
import React, { useEffect, useState } from "react";
import Post from "../crud-components/Post";

export default function ReadData() {
  const [postList, setPostList] = useState();

  useEffect(() => {
    // const createPost = () => {
    //     const postRef = firebase.database().ref("Post");
    const postRef = firebase.database().ref("Post");
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
        ? postList.map((post, index) => <Post post={post} key={index} />)
        : ""}
    </div>
  );
}
