import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Signup from "../components/signup";
import "../css/dashboard.css";
import "../css/discussion.css";
import Logo from "../images/logo.jpg";
function SignUpPage() {
  return (
    <>
      <div class="dashboard-background">
        <Link to="/">
          <div class="home-logo">
            <img style={{ height: 100 }}src={Logo} alt="" />
          </div>
        </Link>
        <Container className="login-container">
          <div style={{ maxWidth: "400px" }}>
            <Signup />
          </div>
        </Container>
      </div>
    </>
  );
}

export default SignUpPage;
