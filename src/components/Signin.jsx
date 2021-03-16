import React, { useState } from "react";
import { Col, Row, Form, Button, Nav } from "react-bootstrap";

function Signin() {
  const [username, setUserName] = useState("");
  const [password, setpassword] = useState("");
  const loginUser = (details) => {
    console.log(username);
    console.log(password);
  };
  return (
    <div className="logindiv">
      <Row className="innerlogin">
        <Col className="col-md-6" id="gif2"></Col>
        <Col className="col-md-6 c4">
          <Form>
            <h1 className="text2">Login</h1>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Username"
                value={username}
                onChange={(val) => setUserName(val.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(val) => setpassword(val.target.value)}
              />
            </Form.Group>

            <Button variant="primary" id="btn2" type="button">
              Login
            </Button>
          </Form>
          <p className="para2">
            Don't have an account?
            <Nav.Link href="/register" id="navreg">
              Create One
            </Nav.Link>
          </p>
        </Col>
      </Row>
    </div>
  );
}
export default Signin;
