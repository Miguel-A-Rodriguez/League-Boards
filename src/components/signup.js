import firebase from "firebase";
import React, { useRef, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "../css/App.css";
import "../css/discussion.css";

export default function Signup() {
  const emailRef = useRef();
  // const displayNameRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  console.log(useAuth());
  const { signup } = useAuth();
  const displayNameRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

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
      await signup(
        emailRef.current.value,
        // displayNameRef.current.value,
        passwordRef.current.value
      );
      await updateDisplayName();
      history.push("/dashboard");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  console.log(typeof error);

  // ~~~~~~~~~~~update DisplayName on submit  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  function updateDisplayName() {
    const user = firebase.auth().currentUser;

    user
      .updateProfile({
        displayName: displayNameRef.current.value,
      })
      .then(function () {
        console.log("succeded in making name!");
      })
      .catch(function (error) {
        console.log("DisplayName failed to update");
      });
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4 ">Sign up</h2>

          {error && <div style={{ color: "red" }}>{error}</div>}
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label id="text">DisplayName</Form.Label>
              <Form.Control
                type="text"
                id="displayName"
                ref={displayNameRef}
                required
              />
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
        <Link to="/login">
          <div className="w-50 text-center ">
            Already have an account? Log in
          </div>
        </Link>
      </Card>
    </>
  );
}
