import React from "react";
//import img from './images';//
import { Link } from "react-router-dom";
import "../css/App.css";
import "../css/discussion.css";
import Logo from "../images/logo.jpg";

function TopMatchups() {
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
              <div>Recent Posts</div>
            </section>
            <article className="discussion-post-container">
              <div className="discussion-post-user">
                User <br /> Avatar
              </div>
              <section className="discussion-contents">
                <div className="discussion-post-title">Post Title</div>
                <div className="discussion-post-date">Date</div>
                <span className="discussion-post">Discussion Post</span>
              </section>
            </article>
            <div className="input-field">
              <input type="text" />
              <button>Post new thread</button>
            </div>
            <div></div>
          </div>
        </body>
      </html>
    </>
  );
}

export default TopMatchups;
