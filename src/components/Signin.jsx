import React, { useState } from "react";
import { Col, Row, Form, Button, Nav } from "react-bootstrap";
import {fireapp,firelytics,db,auth} from './firebase'
import { useHistory } from 'react-router-dom';
function Signin() {
  const history = useHistory();
  fireapp.analytics();
  const [username, setUserName] = useState("");
  const [password, setpassword] = useState("");
  var uid="";
  const loginUser =async (details) => {
    if(username!=""&&password!="")
    {
        try {
          fetch("https://huddle-backend.herokuapp.com/graphql/",{
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              query:`
              mutation tokenAuth($password:String!,$username:String!){
                tokenAuth(password:$password,username:$username)
                {
                  token
                }
              }
              `,
              variables:{password,username}
            })
          })
          .then((res)=>res.json())
          .then((result)=>{
            console.log(result)
          })
          window.location.href = "/home"
        } catch (error) {
            alert(error)
        }
    }
    else
    {
      alert("Please enter all the fields")
    }
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
                type="email"
                placeholder="Email"
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

            <Button variant="primary" id="btn2" type="button" onClick={loginUser}>
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
