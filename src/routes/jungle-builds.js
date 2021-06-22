//import img from './images';//

import { default as React } from "react";
import JbCreateThread from "../components/CRUD-Components/Jb-CRUD/JbCreateThread";
import JbReadData from "../components/CRUD-Components/Jb-CRUD/JbReadData";
import Nav from "../components/Nav";
import "../css/discussion.css";

function JungleBuilds() {
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
              <div>Jungle Builds</div>
            </section>
            <article className="discussion-post-container">
              <section>
                <JbReadData />
                <div>
                  <JbCreateThread />
                </div>
              </section>
            </article>
          </div>
        </body>
      </html>
    </>
  );
}

export default JungleBuilds;
