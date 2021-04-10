import React, { useRef, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "../css/App.css";
import "../css/discussion.css";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/dashboard");
    } catch {
      setError("Failed to Login");
    }

    setLoading(false);
  }

  console.log(typeof error);

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4 ">Log In</h2>

          {error && <div style={{ color: "red" }}>{error}</div>}
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label id="email">Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group>
              <Form.Label id="password">Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>

            <Button disabled={loading} className="sign-up-button" type="submit">
              Login
            </Button>
          </Form>
        </Card.Body>
        <Link to="/signup">
          {" "}
          <div className="w-50 text-center ">Need an account? Sign up</div>{" "}
        </Link>
      </Card>
    </>
  );
}
