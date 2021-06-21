import React from "react";
//import img from './images';//
import { Link, Redirect } from "react-router-dom";
import Nav from "../components/Nav";
import { useAuth } from "../contexts/AuthContext";
import "../css/discussion.css";
import "../css/thread.css";
function Jungle() {
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
                <Link to="jungle-matchups">
                  <li className="discussion-items-container__matchups">
                    Jungle Matchups
                  </li>
                </Link>
                <Link to="jungle-builds">
                  <li className="discussion-items-container__builds">
                    Jungle Champion Builds
                  </li>
                </Link>
                <Link to="jungle-teams">
                  <li className="discussion-items-container__team">
                    Jungle Looking For Team
                  </li>
                </Link>
                <Link to="jungle-talk">
                  <li className="discussion-items-container__talk">
                    Jungle Free Talk
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

export default Jungle;
