//import img from './images';//
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import DateTime from "../components/DateTime";
import { useAuth } from "../contexts/AuthContext";
import CreateThread from "../crud-components/CreateThread";
import ReadData from "../crud-components/ReadData";
import "../css/App.css";
import "../css/discussion.css";
import Logo from "../images/logo.jpg";
function TopMatchups() {
  const { currentUser } = useAuth();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
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
            <header>
              <nav>
                {/* need onlick for this div to be the home button  */}
                <Link to="/">
                  <div class="home-logo">
                    <img src={Logo} alt="" />
                  </div>
                </Link>
              </nav>
            </header>
            <section className="discussion-headers">
              <div>Top Matchups</div>
            </section>
            <article className="discussion-post-container">
              <div className="discussion-post-user">
                {currentUser.email}
                <div className="discussion-post-date">
                  <DateTime></DateTime>
                </div>
              </div>

              <section className="discussion-contents">
                <div className="discussion-post-title">
                  <ReadData />
                </div>
                {/* <ReadData /> */}
                <span className="discussion-post">content</span>
              </section>
            </article>
            <CreateThread />
            {/* <form className="input-field" onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="Input Your Title"
                name="title"
                {...register("title", {
                  required: true,
                })}
              />

              <input
                type="text"
                placeholder="Input Your Content"
                name="content"
                {...register("content", {
                  required: true,
                })}
              />
              <input type="submit" />
            </form> */}
            <div></div>
          </div>
        </body>
      </html>
    </>
  );
}

export default TopMatchups;
