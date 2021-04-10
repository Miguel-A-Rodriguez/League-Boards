import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";

export default function DashBoard() {
  const [error, setError] = useState("");
  const { currentUser } = useAuth();

  function handleLogout() {}

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4 ">Profile</h2>
          {error && <div style={{ color: "red" }}>{error}</div>}
          <strong>Email:</strong>
          {currentUser.email}
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="Link" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </>
  );
}
