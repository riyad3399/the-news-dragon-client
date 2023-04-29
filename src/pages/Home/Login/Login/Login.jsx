import React from "react";
import { useContext } from "react";
import { Button, Container, Form} from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../providers/AuthProvider";
import { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {

  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  console.log('login page location', location);
  const from = location.state?.from?.pathname || '/category/0';

  const { signIn } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then(result => {
        const loggedUser = result.user;
        setError('')
        form.reset()
        toast.success('Login successful.', { theme: 'dark', autoClose: 2000 })
        navigate(from, {replace: true})
      })
      .catch(error => {
        setError(error.message)
    })
  }

  return (
    <Container className="w-50 mx-auto shadow p-5">
      <Form onSubmit={handleLogin}>
        <h2>Please Login</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            required
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            required
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <br />
        <Form.Text className="text-secondary">
          Don't Have an Account
          <Link to="/register">Register</Link>
        </Form.Text>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger">
          <p>{ error}</p>
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
