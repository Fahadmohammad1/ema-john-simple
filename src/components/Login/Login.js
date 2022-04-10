import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nevigate = useNavigate();

  const [signInWithEmailAndPassword, user, , error] =
    useSignInWithEmailAndPassword(auth);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handlePassBlur = (e) => {
    setPassword(e.target.value);
  };
  if (user) {
    nevigate(from, { replace: true });
  }
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="mt-5 w-50 mx-auto border p-4">
      <h2 className="text-center">Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleEmailBlur}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted"></Form.Text>
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
        <p className="text-danger">{error?.message}</p>

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
