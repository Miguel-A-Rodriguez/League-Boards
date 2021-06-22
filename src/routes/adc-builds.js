//import img from './images';//

import { default as React } from "react";
import AbCreateThread from "../components/CRUD-Components/Ab-CRUD/AbCreateThread";
import AbReadData from "../components/CRUD-Components/Ab-CRUD/AbReadData";
import Nav from "../components/Nav";
import "../css/discussion.css";

function AdcBuilds() {
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
              <div>Adc Builds</div>
            </section>
            <article className="discussion-post-container">
              <section>
                <AbReadData />
                <div>
                  <AbCreateThread />
                </div>
              </section>
            </article>
          </div>
        </body>
      </html>
    </>
  );
}

export default AdcBuilds;
