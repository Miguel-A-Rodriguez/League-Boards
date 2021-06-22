//import img from './images';//

import TtCreateThread from "../components/CRUD-Components/Tt-CRUD/TtCreateThread";
import TtReadData from "../components/CRUD-Components/Tt-CRUD/TtReadData";
import Nav from "../components/Nav";
import "../css/discussion.css";

function TopTeams() {
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
              <div>Top Looking for Teams</div>
            </section>
            <article className="discussion-post-container">
              <section>
                <TtReadData />
                <div>
                  <TtCreateThread />
                </div>
              </section>
            </article>
          </div>
        </body>
      </html>
    </>
  );
}

export default TopTeams;
