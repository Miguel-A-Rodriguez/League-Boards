//import img from './images';//

import MdCreateThread from "../components/CRUD-Components/Md-CRUD/MdCreateThread";
import MdReadData from "../components/CRUD-Components/Md-CRUD/MdReadData";
import Nav from "../components/Nav";
import "../css/discussion.css";

function MidTalk() {
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
              <div>Mid Talk </div>
            </section>
            <article className="discussion-post-container">
              <section>
                <MdReadData />
                <div>
                  <MdCreateThread />
                </div>
              </section>
            </article>
          </div>
        </body>
      </html>
    </>
  );
}

export default MidTalk;
