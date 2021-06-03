import firebase from "firebase";
import { default as React, useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";

export default function AbPost({ post }) {
  const { currentUser } = useAuth();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date] = useState(new Date());
  const [visible, setVisible] = useState(false);

  const updateTitle = () => {
    const postRef = firebase.database().ref("AbPost").child(post.id);
    postRef.update({ title, date: date.toLocaleDateString() });
    window.location.reload();
  };
  const updateContent = () => {
    const postRef = firebase.database().ref("AbPost").child(post.id);
    postRef.update({ content, date: date.toLocaleDateString() });
    window.location.reload();
  };

  const deletePost = () => {
    const postRef = firebase.database().ref("AbPost").child(post.id);
    postRef.remove();
    window.location.reload();
  };

  return (
    <>
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
              <button onClick={updateContent}>Update Content</button>
            </aside>
          </>
        )}
      </div>
    </>
  );
}
