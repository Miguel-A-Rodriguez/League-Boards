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
            <header className="home-header">
              <nav>
                <div className="home-image">
                  <img src={Logo} alt="" />
                </div>
              </nav>
              <section className="nav-links">
                <Link to="/signup">
                  <p className="dashboard-link">Sign Up/Login</p>
                </Link>
                <Link to="/dashboard">
                  <p className="dashboard-link">Dashboard</p>
                </Link>
              </section>
            </header>

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
