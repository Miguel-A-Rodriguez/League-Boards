//import img from './images';//

import { default as React } from "react";
import JtCreateThread from "../components/CRUD-Components/Jt-CRUD/JtCreateThread";
import JtReadData from "../components/CRUD-Components/Jt-CRUD/JtReadData";
import Nav from "../components/Nav";
import "../css/discussion.css";

function JungleTeams() {
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
              <div>Jungle Teams</div>
            </section>
            <article className="discussion-post-container">
              <section>
                <JtReadData />
                <div>
                  <JtCreateThread />
                </div>
              </section>
            </article>
          </div>
        </body>
      </html>
    </>
  );
}

export default JungleTeams;
