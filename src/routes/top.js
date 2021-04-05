import React from "react";
//import img from './images';//
import { Link } from "react-router-dom";
import "../css/App.css";
import "../css/discussion.css";
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
          <div className="discussion-container">
            <header>
              <nav>
                {/* need onlick for this div to be the home button  */}
                <Link to="/">
                  <div>
                    <img src={Logo} alt="" />
                  </div>
                </Link>
              </nav>
            </header>
            <section className="discussion-items-container">
              <Link to="top-matchups">
                <div className="discussion-items-container__matchups">
                  Top Matchups
                </div>
              </Link>
              <Link to="top-builds">
                <div className="discussion-items-container__builds">
                  Top Champion Builds
                </div>
              </Link>
              <Link to="top-teams">
                <div className="discussion-items-container__team">
                  Top Looking For Team
                </div>
              </Link>
              <Link to="top-talk">
                <div className="discussion-items-container__talk">
                  Top Free Talk
                </div>
              </Link>
            </section>
          </div>
        </body>
      </html>
    </>
  );
}

export default Top;
