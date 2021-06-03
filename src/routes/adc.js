import React from "react";
//import img from './images';//
import { Link } from "react-router-dom";
import "../css/discussion.css";
import "../css/thread.css";
import Logo from "../images/logo.jpg";
function Adc() {
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
                <Link to="adc-matchups">
                  <li className="discussion-items-container__matchups">
                    Adc Matchups
                  </li>
                </Link>
                <Link to="adc-builds">
                  <li className="discussion-items-container__builds">
                    Adc Champion Builds
                  </li>
                </Link>
                <Link to="adc-teams">
                  <li className="discussion-items-container__team">
                    Adc Looking For Team
                  </li>
                </Link>
                <Link to="adc-talk">
                  <li className="discussion-items-container__talk">
                    Adc Free Talk
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

export default Adc;
