//import img from './images';//

import { Link } from "react-router-dom";
import MmCreateThread from "../components/CRUD-Components/Mm-CRUD/MmCreateThread";
import MmReadData from "../components/CRUD-Components/Mm-CRUD/MmReadData";
import "../css/discussion.css";
import Logo from "../images/logo.jpg";

function MidMatchups() {
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
              <div>Mid Matchups</div>
            </section>
            <article className="discussion-post-container">
              <section>
                <MmReadData />
                <div>
                  <MmCreateThread />
                </div>
              </section>
            </article>
          </div>
        </body>
      </html>
    </>
  );
}

export default MidMatchups;
