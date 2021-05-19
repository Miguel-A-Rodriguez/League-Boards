import React from "react";
//import img from './images';//
import { Link } from "react-router-dom";
import "../css/discussion.css";
import Logo from "../images/logo.jpg";

function Jungle() {
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
                  <div>
                    <img src={Logo} alt="" />
                  </div>
                </Link>
              </nav>
            </header>
            <section className="discussion-items-container">
              <Link to="jungle-matchups">
                <div className="discussion-items-container__matchups">
                  Jungle Matchups
                </div>
              </Link>
              <Link to="jungle-builds">
                <div className="discussion-items-container__builds">
                  Jungle Champion Builds
                </div>
              </Link>
              <Link to="jungle-teams">
                <div className="discussion-items-container__team">
                  Jungle Looking For Team
                </div>
              </Link>
              <Link to="jungle-talk">
                <div className="discussion-items-container__talk">
                  Jungle Free Talk
                </div>
              </Link>
            </section>
          </div>
        </body>
      </html>
    </>
  );
}

export default Jungle;
