import React from "react";
import { Container } from "react-bootstrap";
import Signup from "../components/signup";
import { AuthProvider } from "../contexts/AuthContext";
import "../css/App.css";
import "../css/discussion.css";
function SignUpPage() {
  return (
    <AuthProvider>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minheight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Signup />
        </div>
      </Container>
    </AuthProvider>
  );
}

export default SignUpPage;
