import React from "react";
import { Link } from "react-router-dom";
import "../css/discussion.css";
import "../css/home.css";
import Logo from "../images/logo.jpg";

export default function Nav() {
  return (
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
  );
}
