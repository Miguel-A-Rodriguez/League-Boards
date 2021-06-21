import React from "react";
//import img from './images';//
import { Link, Redirect } from "react-router-dom";
import Nav from "../components/Nav";
import { useAuth } from "../contexts/AuthContext";
import "../css/discussion.css";
import "../css/thread.css";
function Support() {
  const { currentUser } = useAuth();
  return (
    <>
      {/* redirects to login if the person is not logged in */}
      {currentUser ? <Link to="./mid" /> : <Redirect to="/login" />}
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
          <div className="thread-container">
            <header>
              <Nav />
            </header>
            <section className="thread-items-container">
              <ul>
                <Link to="support-matchups">
                  <li className="discussion-items-container__matchups">
                    Support Matchups
                  </li>
                </Link>
                <Link to="support-builds">
                  <li className="discussion-items-container__builds">
                    Support Champion Builds
                  </li>
                </Link>
                <Link to="support-teams">
                  <li className="discussion-items-container__team">
                    Support Looking For Team
                  </li>
                </Link>
                <Link to="support-talk">
                  <li className="discussion-items-container__talk">
                    Support Free Talk
                  </li>
                </Link>
              </ul>
            </section>
          </div>
        </body>
      </html>
    </>
  );
}

export default Support;
