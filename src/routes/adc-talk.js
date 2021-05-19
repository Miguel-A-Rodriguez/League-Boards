import React from "react";
//import img from './images';//
import { Link } from "react-router-dom";
import "../css/discussion.css";
import Logo from "../images/logo.jpg";

function AdcTalk() {
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
            <section>
              <div>Recent Posts</div>
            </section>
            <article>
              <input type="text" />
            </article>
          </div>
        </body>
      </html>
    </>
  );
}

export default AdcTalk;
