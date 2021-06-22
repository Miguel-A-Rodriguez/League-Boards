//import img from './images';//

import SbCreateThread from "../components/CRUD-Components/Sb-CRUD/SbCreateThread";
import SbReadData from "../components/CRUD-Components/Sb-CRUD/SbReadData";
import Nav from "../components/Nav";
import "../css/discussion.css";

function SupportBuilds() {
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
              <div>Support Builds</div>
            </section>
            <article className="discussion-post-container">
              <section>
                <SbReadData />
                <div>
                  <SbCreateThread />
                </div>
              </section>
            </article>
          </div>
        </body>
      </html>
    </>
  );
}

export default SupportBuilds;
