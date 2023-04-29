import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../providers/AuthProvider";
import { useState } from "react";
import { toast } from "react-toastify";

const Register = () => {

  const [error, setError] = useState('');

  const { createUser } = useContext(AuthContext);
  const [accept, setAccept] = useState(false);
  
  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, photo, email, password);

    createUser(email, password)
      .then(result => {
        const createdUser = result.user;
        console.log(createdUser);
        setError('')
        toast.success('Register successful', { theme: 'dark', autoClose: 2000 })
        form.reset();
      })
      .catch(error => {
        setError(error.message);
    })
  }

  const handleAccept = (event) => {
    setAccept(event.target.checked);
    
  }

  return (
    <Container className="w-50 mx-auto shadow p-5">
      <Form onSubmit={handleRegister}>
        <h2 className="text-center mb-3">Please Register Your Account</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" required placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            required
            placeholder="Photo URL"
          />
        </Form.Group>
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
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={handleAccept}
            type="checkbox"
            name="accept"
            label={<>Accept <Link to='/terms'>Terms and Conditions</Link></>}
          />
        </Form.Group>
        <Button variant="primary" disabled={!accept} type="submit">
          Register
        </Button>
        <br />
        <Form.Text className="text-secondary">
          Already Have an Account?
          <Link to="/login">Login</Link>
        </Form.Text>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger">
          <p>{ error}</p>
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Register;
