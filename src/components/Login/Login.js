import React from "react";
import { Button, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="mt-5 w-50 mx-auto">
      <h2 className="text-center">Login</h2>
      <Form className="">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="outline-dark" className="fw-bold w-100" type="submit">
          Login
        </Button>
      </Form>
      <p className="text-center">
        New to ema-john?{" "}
        <NavLink to="/signUp" className="">
          Create New Account
        </NavLink>
      </p>
    </div>
  );
};

export default Login;
