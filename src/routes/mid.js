import React from "react";
//import img from './images';//
import { Link } from "react-router-dom";
import "../css/discussion.css";
import "../css/thread.css";
import Logo from "../images/logo.jpg";
function Mid() {
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
          <div className="thread-container">
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
            <section className="thread-items-container">
              <ul>
                <Link to="mid-matchups">
                  <li className="discussion-items-container__matchups">
                    Mid Matchups
                  </li>
                </Link>
                <Link to="mid-builds">
                  <li className="discussion-items-container__builds">
                    Mid Champion Builds
                  </li>
                </Link>
                <Link to="mid-teams">
                  <li className="discussion-items-container__team">
                    Mid Looking For Team
                  </li>
                </Link>
                <Link to="mid-talk">
                  <li className="discussion-items-container__talk">
                    Mid Free Talk
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

export default Mid;
