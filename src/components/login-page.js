import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Login from "../components/login";
import "../css/discussion.css";
import Logo from "../images/logo.jpg";
function LogInPage() {
  return (
    <>
      <Link to="/">
        <div class="home-logo">
          <img style={{ height: 100 }} src={Logo} alt="" />
        </div>
      </Link>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minheight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Login />
        </div>
      </Container>
    </>
  );
}

export default LogInPage;
