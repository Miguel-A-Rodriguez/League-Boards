//import img from './images';//

import MtCreateThread from "../components/CRUD-Components/Mt-CRUD/MtCreateThread";
import MtReadData from "../components/CRUD-Components/Mt-CRUD/MtReadData";
import Nav from "../components/Nav";
import "../css/discussion.css";

function MidTeams() {
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
              <div>Mid Teams </div>
            </section>
            <article className="discussion-post-container">
              <section>
                <MtReadData />
                <div>
                  <MtCreateThread />
                </div>
              </section>
            </article>
          </div>
        </body>
      </html>
    </>
  );
}

export default MidTeams;
