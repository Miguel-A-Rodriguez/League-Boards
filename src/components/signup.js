import React, { useRef, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import "../css/App.css";
import "../css/discussion.css";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      // return (
      setError("Passwords do not match");
      console.log("passwords did not match");
      return;
      // );
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  console.log(typeof error);

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4 ">Sign up</h2>

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
            <Form.Group>
              <Form.Label id="password-confirm">
                Password Confirmation
              </Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="sign-up-button" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
        <div className="w-50 text-center ">Already have an account? Log in</div>
      </Card>
    </>
  );
}
