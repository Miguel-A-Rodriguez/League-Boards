import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import ProfilePicture from "../components/profile-picture";
import { useAuth } from "../contexts/AuthContext";
import "../css/dashboard.css";
import Logo from "../images/logo.jpg";

export default function DashBoard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  // To create a file upload component use the file upload library called react dropzone
  // Can just pass the htts link from other website to firebase but not proper way
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

  return (
    <>
      <div className="dashboard-background">
        <Link to="/">
          <div class="home-logo">
            <img src={Logo} alt="" />
          </div>
        </Link>
        <section>
          <Card>
            <Card.Body class="dashboard-container">
              <h2 className="text-center mb-4 ">Profile</h2>
              {error && <div style={{ color: "red" }}>{error}</div>}
              <div class="profile-picture-container">
                <ProfilePicture currentUser={currentUser} />
              </div>
            <section className="dashboard-profile-buttons">
              <div class="email-form">
                <p>Display Name:</p>
                {currentUser.displayName}
              </div>
              <div className="email-form">
                <p>Email: {currentUser.email}</p>
                
              </div>
            </section>
                <Link to="/update-profile">
                  <div className="text-center mt-2 update-profile-button">
                    <Link to="/update-profile" className="update-profile-button-link">
                      Update Profile
                    </Link>
                  </div>
                </Link>
                <div className="logout-button">
                  <Button className="btn btn-primary mt-3" onClick={handleLogout}>
                    Logout
                  </Button>
                </div>
            
            </Card.Body>
          </Card>
        </section>
        <br/>
        <br/>
      </div>
    </>
  );
}
