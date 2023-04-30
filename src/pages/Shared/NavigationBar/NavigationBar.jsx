import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";


const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(error => {
      console.log(error);
      })
  }

  return (
    <Container>
      <Navbar
        className="my-4"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto d-flex ">
              <Link className="text-decoration-none" to="/category/0">
                Home
              </Link>
              <Link className="mx-3 text-decoration-none">About</Link>
              <Link className="text-decoration-none">Career</Link>
              <Link className="text-decoration-none mx-3" to="/login">
                Login
              </Link>
              <Link className="text-decoration-none" to="/register">
                Register
              </Link>
            </Nav>
            <Nav>
              {user && (
                user.photoURL ? <img className="rounded-circle" style={{ height: '40px' }} src={user.photoURL} alt="" /> : <FaUserCircle style={{ fontSize: "2.1rem" }}></FaUserCircle>
              )}

              {user ? (
                <Button className="ms-2" onClick={handleLogOut} variant="success">Logout</Button>
              ) : (
                <Link to='/login'>
                  <Button variant="primary">Login</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
