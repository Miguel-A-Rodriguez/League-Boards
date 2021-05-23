import React from "react";
//import img from './images';//
import { Link } from "react-router-dom";
import "../css/discussion.css";
import "../css/thread.css";
import Logo from "../images/logo.jpg";

function Top() {
  return (
    <>
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
            <nav>
              {/* need onlick for this div to be the home button  */}
              <Link to="/">
                <div>
                  <img src={Logo} alt="" />
                </div>
              </Link>
            </nav>
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
