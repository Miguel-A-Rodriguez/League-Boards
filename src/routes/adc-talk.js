//import img from './images';//

import { default as React } from "react";
import AdCreateThread from "../components/CRUD-Components/Ad-CRUD/AdCreateThread";
import AdReadData from "../components/CRUD-Components/Ad-CRUD/AdReadData";
import Nav from "../components/Nav";
import "../css/discussion.css";

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
            <Nav />

            <section className="discussion-headers">
              <div>Adc Talk</div>
            </section>
            <article className="discussion-post-container">
              <section>
                <AdReadData />
                <div>
                  <AdCreateThread />
                </div>
              </section>
            </article>
          </div>
        </body>
      </html>
    </>
  );
}

export default AdcTalk;
