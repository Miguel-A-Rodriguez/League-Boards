import React from "react";
//import img from './images';//
import { Link } from "react-router-dom";
import "../css/discussion.css";
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
              <Link to="adc-matchups">
                <div className="discussion-items-container__matchups">
                  ADC Matchups
                </div>
              </Link>

              <Link to="adc-builds">
                <div className="discussion-items-container__builds">
                  ADC Champion Builds
                </div>
              </Link>

              <Link to="adc-teams">
                <div className="discussion-items-container__team">
                  ADC Looking For Team
                </div>
              </Link>
              <Link to="adc-talk">
                <div className="discussion-items-container__talk">
                  ADC Free Talk
                </div>
              </Link>
            </section>
          </div>
        </body>
      </html>
    </>
  );
}

export default Adc;
