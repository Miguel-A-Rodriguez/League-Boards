import firebase from "firebase";
import { default as React, useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";

export default function TmPost({ post }) {
  const { currentUser } = useAuth();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date] = useState(new Date());
  const [visible, setVisible] = useState(false);
  //  1. How to show input fields and updateButtons onClick of edit?
  // A. Make a state for the two inputs that controls the visibility, then use {isVisible && <input />} in jsx
  // 2a. Updated date when someone edited by passing the date state and property/key
  // 3. How would you start putting together a profile picture selector?
  // My thoughts in dashboard, get 120 pictures for all Champions and upload them to the database.
  // Select your Champion portrait in the pop-up widg.
  // On submittion the corresponding url from the database is passed into the update profile pic
  // method from react
  //   if (user != null) {
  //     user.providerData.forEach(function (profile) {
  //       console.log("  Photo URL: " + profile.photoURL);
  //   });
  // }

  // 4. How would you have implemented the CRUD as I have currently just copy and pasted my components
  //   and specified them for each "thread" of the website
  //   Would refactor each CRUD component to be used accross the entire application
  // (Don't repeat yourself)

  // 5. Could you explain whats in the read data component line by line (done)

  // Look into the next 2 weeks
  // 1. Creating reuseable functions in javascript
  // 2. Creating reuseable components in react

  const updateTitle = () => {
    const postRef = firebase.database().ref("TmPost").child(post.id);
    postRef.update({ title, date: date.toLocaleDateString() });
    window.location.reload();
  };
  const updateContent = () => {
    const postRef = firebase.database().ref("TmPost").child(post.id);
    postRef.update({ content, date: date.toLocaleDateString() });
    window.location.reload();
  };
  // const updatePost = () => {
  //   const postRef = firebase.database().ref("TmPost").child(post.id);
  //   if (title === "") {
  //     return post.title;
  //   } else {
  //     postRef.update({ title, date: date.toLocaleDateString() });
  //   }
  //   if (content === "") {
  //     return post.content;
  //   } else {
  //     postRef.update({ content, date: date.toLocaleDateString() });
  //     // window.location.reload();
  //   }
  // };

  const deletePost = () => {
    const postRef = firebase.database().ref("TmPost").child(post.id);
    postRef.remove();
    window.location.reload();
  };

  return (
    <>
      {/* <button style={{ height: 200 }} onClick={user}></button> */}
      <div className="post-contents">
        <h1>{post?.title}</h1>
        <h2> {post?.content}</h2>
        <h3>Posted by: {post?.displayName}</h3>
        <h4>Posted on:</h4>
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
            currentUser.displayName === post?.displayName
              ? () => setVisible(!visible)
              : null
          }
        >
          Edit
        </button>
        {visible && (
          <>
            <aside className="post-buttons">
              <input
                type="text"
                onChange={(event) => setTitle(event.target.value)}
                value={title}
              />
              <button onClick={updateTitle}>Update Title</button>
            </aside>
            <aside class="post-buttons">
              <input
                type="text"
                onChange={(event) => setContent(event.target.value)}
                value={content}
              />
              <button onClick={updateContent}>Update Post</button>
            </aside>
          </>
        )}
      </div>
    </>
  );
}
