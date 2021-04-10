import React from "react";
import { Container } from "react-bootstrap";
import Login from "../components/login";
import { AuthProvider } from "../contexts/AuthContext";
import "../css/App.css";
import "../css/discussion.css";

function LogInPage() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minheight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <AuthProvider>
          <Login />
        </AuthProvider>
      </div>
    </Container>
  );
}

export default LogInPage;
