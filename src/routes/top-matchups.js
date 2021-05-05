//import img from './images';//
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "../css/App.css";
import "../css/discussion.css";
import Logo from "../images/logo.jpg";

function TopMatchups() {
  const { currentUser } = useAuth();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const inputRef = useRef();

  function focus() {
    inputRef.current.focus();
  }

  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>LOLjp.gg</title>
        </head>
        <body>
          <div className="discussion-container">
            <header>
              <nav>
                {/* need onlick for this div to be the home button  */}
                <Link to="/">
                  <div class="home-logo">
                    <img src={Logo} alt="" />
                  </div>
                </Link>
              </nav>
            </header>
            <section className="discussion-headers">
              <div>Top Matchups</div>
            </section>
            <article className="discussion-post-container">
              <div className="discussion-post-user">
                {currentUser.email}
                <div className="discussion-post-date">Date</div>
              </div>

              <section className="discussion-contents">
                <div className="discussion-post-title">{title}</div>

                <span className="discussion-post">{content}</span>
              </section>
            </article>
            <div className="input-field">
              <input
                ref={inputRef}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                id="thread-title"
                type="text"
              />
              <button id="new-title" onClick={focus}>
                Post new thread Title
              </button>
              <input
                id="thread-field"
                type="text"
                ref={inputRef}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <button id="new-thread" type="submit" onClick={focus}>
                Post new thread Content
              </button>
            </div>
            <div></div>
          </div>
        </body>
      </html>
    </>
  );
}

export default TopMatchups;
