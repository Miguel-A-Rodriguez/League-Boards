//import img from './images';//

import { Link } from "react-router-dom";
import MbCreateThread from "../components/CRUD-Components/Mb-CRUD/MbCreateThread";
import MbReadData from "../components/CRUD-Components/Mb-CRUD/MbReadData";
import "../css/discussion.css";
import Logo from "../images/logo.jpg";

function MidBuilds() {
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
              <div>Mid Builds</div>
            </section>
            <article className="discussion-post-container">
              <section>
                <MbReadData />
                <div>
                  <MbCreateThread />
                </div>
              </section>
            </article>
          </div>
        </body>
      </html>
    </>
  );
}

export default MidBuilds;
