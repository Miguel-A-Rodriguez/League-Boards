import React from "react";
//import img from './images';//
import { Link } from "react-router-dom";
import TbCreateThread from "../components/CRUD-Components/TB-CRUD/TbCreateThread";
import TbReadData from "../components/CRUD-Components/TB-CRUD/TbReadData";
import "../css/discussion.css";
import Logo from "../images/logo.jpg";

function TopBuilds() {
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
              <div>Top Builds</div>
            </section>
            <article className="discussion-post-container">
              <section>
                <TbReadData />
                <div>
                  <TbCreateThread />
                </div>
              </section>
            </article>
          </div>
        </body>
      </html>
    </>
  );
}

export default TopBuilds;
