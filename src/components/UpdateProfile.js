import React, { useRef, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "../css/App.css";
import "../css/discussion.css";

export default function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      //   await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/dashboard");
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
          <h2 className="text-center mb-4 ">Update Profile</h2>

          {error && <div style={{ color: "red" }}>{error}</div>}
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label id="email">Email</Form.Label>
              <Form.Control
                type="email"
                ref={emailRef}
                required
                defaultValue={currentUser.email}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label id="password">Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                placeholder="Leave blank to keep the same"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label id="password-confirm">
                Password Confirmation
              </Form.Label>
              <Form.Control
                type="password"
                ref={passwordConfirmRef}
                placeholder="Leave blank to keep the same"
              />
            </Form.Group>
            <Button disabled={loading} className="sign-up-button" type="submit">
              Update
            </Button>
          </Form>
        </Card.Body>
        <Link to="/dashboard">
          <div className="w-50 text-center ">Cancel</div>
        </Link>
      </Card>
    </>
  );
}
