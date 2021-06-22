//import img from './images';//

import { default as React } from "react";
import AmCreateThread from "../components/CRUD-Components/Am-CRUD/AmCreateThread";
import AmReadData from "../components/CRUD-Components/Am-CRUD/AmReadData";
import Nav from "../components/Nav";
import "../css/discussion.css";

function AdcMatchups() {
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
              <div>Adc Matchups</div>
            </section>
            <article className="discussion-post-container">
              <section>
                <AmReadData />
                <div>
                  <AmCreateThread />
                </div>
              </section>
            </article>
          </div>
        </body>
      </html>
    </>
  );
}

export default AdcMatchups;
