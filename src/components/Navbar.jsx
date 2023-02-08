import React from "react";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Navbars = () => {
  const { currentUser, logout } = useContext(AuthContext);
  return (
    <div className="navbar">
      <Container>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand href="#">
              <Link to="/">My Recipe</Link>
            </Navbar.Brand>
            {currentUser ? (
              <Button variant="info" onClick={logout}>Logout</Button>
            ) : (
              <Link to="/login"><Button variant="success">Login</Button></Link>
            )}
          </Container>
        </Navbar>
      </Container>
    </div>
  );
};

export default Navbars;
