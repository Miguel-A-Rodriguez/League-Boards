//import img from './images';//

import MbCreateThread from "../components/CRUD-Components/Mb-CRUD/MbCreateThread";
import MbReadData from "../components/CRUD-Components/Mb-CRUD/MbReadData";
import Nav from "../components/Nav";
import "../css/discussion.css";

function MidBuilds() {
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
              <div>Mid Builds</div>
            </section>
            <article className="discussion-post-container">
              <section>
                <MbReadData />
                <div>
                  <MbCreateThread />
                </div>
              </section>
            </article>
          </div>
        </body>
      </html>
    </>
  );
}

export default MidBuilds;
