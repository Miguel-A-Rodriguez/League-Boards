//import img from './images';//

import { default as React } from "react";
import JmCreateThread from "../components/CRUD-Components/Jm-CRUD/JmCreateThread";
import JmReadData from "../components/CRUD-Components/Jm-CRUD/JmReadData";
import Nav from "../components/Nav";
import "../css/discussion.css";

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
            <Nav />

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
