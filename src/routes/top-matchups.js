//import img from './images';//

import { Link } from "react-router-dom";
import CreateThread from "../crud-components/CreateThread";
import ReadData from "../crud-components/ReadData";
import "../css/App.css";
import "../css/discussion.css";
import Logo from "../images/logo.jpg";

function TopMatchups() {
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
                <Link to="/">
                  <div class="home-logo">
                    <img src={Logo} alt="" />
                  </div>
                </Link>
              </nav>
            </header>
            <section className="discussion-headers">
              <div>Top Matchups</div>
            </section>
            <article className="discussion-post-container">
              <section className="discussion-contents">
                <div id="title-content" className="discussion-post-title">
                  <ReadData />
                </div>
                {/* <ReadData /> */}

                <CreateThread />
              </section>
            </article>

            <div></div>
          </div>
        </body>
      </html>
    </>
  );
}

export default TopMatchups;
