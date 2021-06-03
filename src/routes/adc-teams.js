//import img from './images';//

import { default as React } from "react";
import { Link } from "react-router-dom";
import AtCreateThread from "../components/CRUD-Components/At-CRUD/AtCreateThread";
import AtReadData from "../components/CRUD-Components/At-CRUD/AtReadData";
import "../css/discussion.css";
import Logo from "../images/logo.jpg";

function AdcTeams() {
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
            <nav>
              <Link to="/">
                <div class="home-logo">
                  <img src={Logo} alt="" />
                </div>
              </Link>
            </nav>

            <section className="discussion-headers">
              <div>Adc Teams</div>
            </section>
            <article className="discussion-post-container">
              <section>
                <AtReadData />
                <div>
                  <AtCreateThread />
                </div>
              </section>
            </article>
          </div>
        </body>
      </html>
    </>
  );
}

export default AdcTeams;
