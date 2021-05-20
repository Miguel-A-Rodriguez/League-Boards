import React from "react";
import { Link } from "react-router-dom";
import "../css/discussion.css";
import "../css/home.css";
import Logo from "../images/logo.jpg";
function Home() {
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
          <div className="home-container">
            <header>
              <nav>
                <div className="home-image">
                  <img src={Logo} alt="" />
                </div>
              </nav>
              <Link to="/signup">
                <div
                  className="sign-up-link"
                  style={{
                    color: "white",
                    marginTop: "1rem",
                    marginRight: "1rem",
                    fontSize: "18px",
                    fontWeight: "bolder",
                  }}
                >
                  Sign Up/Login
                </div>
              </Link>
            </header>
            <Link to="/dashboard">
              <div className="dashboard-link">Dashboard</div>
            </Link>
            <section className="home-items-container">
              <Link to="./top">
                <div>Top</div>
              </Link>
              <Link to="./mid">
                <div>Mid</div>
              </Link>
              <Link to="./jungle">
                <div>Jungle</div>
              </Link>
              <Link to="./adc">
                <div>ADC</div>
              </Link>
              <Link to="./support">
                <div>Support</div>
              </Link>
            </section>
            <footer>.</footer>
          </div>
        </body>
      </html>
    </>
  );
}

export default Home;
