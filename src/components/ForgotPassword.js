import React, { useRef, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "../css/discussion.css";
import Logo from "../images/logo.jpg";

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  console.log(typeof error);

  return (
    <>
      <Link to="/">
        <div class="home-logo">
          <img style={{ height: 100 }} src={Logo} alt="" />
        </div>
      </Link>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4 ">Password Reset</h2>

          {error && <div style={{ color: "red" }}>{error}</div>}
          {message && <div style={{ color: "green" }}>{message}</div>}
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label id="email">Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Button disabled={loading} className="sign-up-button" type="submit">
              Reset Password
            </Button>
          </Form>
          <div className="w-50 text-center mt-3 ">
            <Link to="/login">Login</Link>
          </div>
        </Card.Body>
        <Link to="/signup">
          {" "}
          <div className="w-50 text-center ">Need an account? Sign up</div>{" "}
        </Link>
      </Card>
    </>
  );
}
