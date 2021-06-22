//import img from './images';//

import { default as React } from "react";
import TmCreateThread from "../components/CRUD-Components/Tm-Crud-Components/TmCreateThread";
import TmReadData from "../components/CRUD-Components/Tm-Crud-Components/TmReadData";
import Nav from "../components/Nav";
import "../css/discussion.css";
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
            <Nav />

            <section className="discussion-headers">
              <div>Top Matchups</div>
            </section>
            <article className="discussion-post-container">
              <section>
                <TmReadData />
                <div>
                  <TmCreateThread />
                </div>
              </section>
            </article>
          </div>
        </body>
      </html>
    </>
  );
}

export default TopMatchups;
