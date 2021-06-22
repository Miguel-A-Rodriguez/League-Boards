//import img from './images';//

import SmCreateThread from "../components/CRUD-Components/Sm-CRUD/SmCreateThread";
import SmReadData from "../components/CRUD-Components/Sm-CRUD/SmReadData";
import Nav from "../components/Nav";
import "../css/discussion.css";

function SupportMatchups() {
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
              <div>Support Matchups</div>
            </section>
            <article className="discussion-post-container">
              <section>
                <SmReadData />
                <div>
                  <SmCreateThread />
                </div>
              </section>
            </article>
          </div>
        </body>
      </html>
    </>
  );
}

export default SupportMatchups;
