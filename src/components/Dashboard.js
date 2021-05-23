import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Logo from "../images/logo.jpg";

export default function DashBoard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }
  // colors

  const styleObj = {
    fontSize: 28,
  };

  return (
    <>
      <Link to="/">
        <div class="home-logo">
          <img style={{ height: 100 }} src={Logo} alt="" />
        </div>
      </Link>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4 ">Profile</h2>
          {error && <div style={{ color: "red" }}>{error}</div>}

          <div className="w-100 text-center mt-2" style={styleObj}>
            <strong>Email:</strong>
            <br />
            {currentUser.email}
          </div>
          <div className="w-100 text-center mt-2">
            <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
              Update Profile
            </Link>
          </div>
          <div className="w-100 text-center mt-2">
            <Button variant="Link" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
