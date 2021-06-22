//import img from './images';//

import { default as React } from "react";
import JdCreateThread from "../components/CRUD-Components/Jd-CRUD/JdCreateThread";
import JdReadData from "../components/CRUD-Components/Jd-CRUD/JdReadData";
import Nav from "../components/Nav";
import "../css/discussion.css";

function JungleTalk() {
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
              <div>Jungle Talk</div>
            </section>
            <article className="discussion-post-container">
              <section>
                <JdReadData />
                <div>
                  <JdCreateThread />
                </div>
              </section>
            </article>
          </div>
        </body>
      </html>
    </>
  );
}

export default JungleTalk;
