//import img from './images';//

import { default as React } from "react";
import { Link } from "react-router-dom";
import JmCreateThread from "../components/CRUD-Components/Jm-CRUD/JmCreateThread";
import JmReadData from "../components/CRUD-Components/Jm-CRUD/JmReadData";
import "../css/discussion.css";
import Logo from "../images/logo.jpg";

function JungleMatchups() {
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
              <div>Jungle Matchups</div>
            </section>
            <article className="discussion-post-container">
              <section>
                <JmReadData />
                <div>
                  <JmCreateThread />
                </div>
              </section>
            </article>
          </div>
        </body>
      </html>
    </>
  );
}

export default JungleMatchups;
