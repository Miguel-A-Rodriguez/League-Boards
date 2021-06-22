//import img from './images';//

import StCreateThread from "../components/CRUD-Components/St-CRUD/StCreateThread";
import StReadData from "../components/CRUD-Components/St-CRUD/StReadData";
import Nav from "../components/Nav";
import "../css/discussion.css";

function SupportTeams() {
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
              <div>Support Teams</div>
            </section>
            <article className="discussion-post-container">
              <section>
                <StReadData />
                <div>
                  <StCreateThread />
                </div>
              </section>
            </article>
          </div>
        </body>
      </html>
    </>
  );
}

export default SupportTeams;
