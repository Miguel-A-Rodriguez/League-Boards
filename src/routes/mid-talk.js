//import img from './images';//

import { Link } from "react-router-dom";
import MdCreateThread from "../components/CRUD-Components/Md-CRUD/MdCreateThread";
import MdReadData from "../components/CRUD-Components/Md-CRUD/MdReadData";
import "../css/discussion.css";
import Logo from "../images/logo.jpg";

function MidTalk() {
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
              <div>Mid Talk </div>
            </section>
            <article className="discussion-post-container">
              <section>
                <MdReadData />
                <div>
                  <MdCreateThread />
                </div>
              </section>
            </article>
          </div>
        </body>
      </html>
    </>
  );
}

export default MidTalk;
