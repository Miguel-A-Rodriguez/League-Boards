import firebase from "firebase";
import { default as React } from "react";
import { Link } from "react-router-dom";
import "../css/discussion.css";
import "../css/home.css";
import Logo from "../images/logo.jpg";

export default function Nav() {
  
  const user = firebase.auth().currentUser;

  return (
    <header className="home-header">
      <Link to="/">
        <nav>
          <div className="home-image">
            <img src={Logo} alt="" />
          </div>
        </nav>
      </Link>
      <section className="nav-links">
        <p className="dashboard-link">
          Welcome
        </p>
        <p className="dashboard-link">
            {user ? user.displayName : "Guest"}
        </p>
        <Link style={{marginLeft: 10}} to="/signup">
           <p className="dashboard-link">{user ? null : "Login/Signup"}</p>
        </Link>
        <Link to="/dashboard">
          <p className="dashboard-link">{user ? "Profile/Logout" : null}</p>
        </Link>
      </section>
    </header>
  );
}
