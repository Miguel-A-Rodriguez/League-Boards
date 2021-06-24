import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Login from "../components/login";
import "../css/discussion.css";
import Logo from "../images/logo.jpg";
function LogInPage() {
  return (
    <>
      <div class="dashboard-background">
        <Link to="/">
          <div class="home-logo">
            <img style={{ height: 100 }} src={Logo} alt="" />
          </div>
        </Link>
        <Container
          className="login-container"
        >
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <Login />
          </div>
        </Container>
      </div>
    </>
  );
}

export default LogInPage;
