import React from "react";
//import img from './images';//
import { Link, Redirect } from "react-router-dom";
import Nav from "../components/Nav";
import { useAuth } from "../contexts/AuthContext";
import "../css/discussion.css";
import "../css/thread.css";
function Top() {
  const { currentUser } = useAuth();
  return (
    <>
      {/* redirects to login if the person is not logged in */}
      {currentUser ? <Link to="./top" /> : <Redirect to="/login" />}
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>LOLjp.gg</title>
        </head>
        <body>
          <div className="thread-container">
            {/* <nav>
              <Link to="/">
                <div>
                  <img src={Logo} alt="" />
                </div>
              </Link>
            </nav> */}
            <Nav />
            <section className="thread-items-container">
              <ul>
                <li>
                  <Link to="top-matchups">Top Matchups</Link>
                </li>
                <li>
                  <Link to="top-builds">Top Champion Builds</Link>
                </li>
                <li>
                  <Link to="top-teams">Top Looking For Team</Link>
                </li>
                <li>
                  <Link to="top-talk">Top Free Talk</Link>
                </li>
              </ul>
            </section>
          </div>
        </body>
      </html>
    </>
  );
}

export default Top;
