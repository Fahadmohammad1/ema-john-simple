import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [textError, setTextError] = useState("");
  const nevigate = useNavigate();

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handlePassBlur = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPass = (e) => {
    setConfirmPass(e.target.value);
  };
  const [createUserWithEmailAndPassword, user, , error] =
    useCreateUserWithEmailAndPassword(auth);
  if (user) {
    nevigate("/shop");
  }
  const handleCreateUser = (e) => {
    e.preventDefault();
    if (password !== confirmPass) {
      setTextError("password not matched");
      return;
    } else if (password < 6) {
      setTextError("password must be 6 characters or longer");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="mt-5 w-50 mx-auto">
      <Form onSubmit={handleCreateUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleEmailBlur}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={handlePassBlur}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            onBlur={handleConfirmPass}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <p className="text-danger">{error?.message}</p>
        <p className="text-danger">{textError ? textError : ""}</p>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
      <p>
        Already have an Account? <NavLink to="/login">Login</NavLink>
      </p>
    </div>
  );
};

export default SignUp;
