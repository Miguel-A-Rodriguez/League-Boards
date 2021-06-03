//import img from './images';//

import { default as React } from "react";
import { Link } from "react-router-dom";
import JdCreateThread from "../components/CRUD-Components/Jd-CRUD/JdCreateThread";
import JdReadData from "../components/CRUD-Components/Jd-CRUD/JdReadData";
import "../css/discussion.css";
import Logo from "../images/logo.jpg";

function JungleTalk() {
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
              <div>Jungle Talk</div>
            </section>
            <article className="discussion-post-container">
              <section>
                <JdReadData />
                <div>
                  <JdCreateThread />
                </div>
              </section>
            </article>
          </div>
        </body>
      </html>
    </>
  );
}

export default JungleTalk;
