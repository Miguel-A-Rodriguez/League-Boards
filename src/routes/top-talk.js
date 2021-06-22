//import img from './images';//

import TdCreateThread from "../components/CRUD-Components/Td-CRUD/TdCreateThread";
import TdReadData from "../components/CRUD-Components/Td-CRUD/TdReadData";
import Nav from "../components/Nav";
import "../css/discussion.css";

function TopTalk() {
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
              <div>Top Talk</div>
            </section>
            <article className="discussion-post-container">
              <section>
                <TdReadData />
                <div>
                  <TdCreateThread />
                </div>
              </section>
            </article>
          </div>
        </body>
      </html>
    </>
  );
}

export default TopTalk;
