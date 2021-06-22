//import img from './images';//

import MmCreateThread from "../components/CRUD-Components/Mm-CRUD/MmCreateThread";
import MmReadData from "../components/CRUD-Components/Mm-CRUD/MmReadData";
import Nav from "../components/Nav";
import "../css/discussion.css";

function MidMatchups() {
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
              <div>Mid Matchups</div>
            </section>
            <article className="discussion-post-container">
              <section>
                <MmReadData />
                <div>
                  <MmCreateThread />
                </div>
              </section>
            </article>
          </div>
        </body>
      </html>
    </>
  );
}

export default MidMatchups;
