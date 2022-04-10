import { Button, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="mt-5 w-50 mx-auto border p-4">
      <h2 className="text-center">Login</h2>
      <Form className="">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
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
