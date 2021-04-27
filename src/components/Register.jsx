import React, { useState } from "react";

import { Col, Row, Form, Button, Nav } from "react-bootstrap";

import {fireapp,firelytics,db,auth} from './firebase'
function Register() {
  fireapp.analytics();
  
  const [email1, setemail] = useState("");
  const [name1, setname] = useState("");
  const [password1, setpassword] = useState("");
  const user =async (e) => {
    e.preventDefault();
    if (name1 != "" && email1 != "" && password1 != "") {

      if (password1.length > 5 && email1.includes("@") && email1.includes(".com")) {
          
              fetch("https://huddle-backend.herokuapp.com/graphql/",{
                method: "POST",
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  query:`
                  mutation createuser($email1:String!, $password1:String!,$name1:String!){
                    createUser(password:$password1,email:$email1,username:$name1)
                    {
                      __typename
                    }
                  }
                  `,
                  variables:{password1,email1,name1}
                })
              })
              .then((res)=>res.json())
              .then((result)=>{
                console.log(result)
              })
             
          
      }
  } 

  else
  {
      alert("Please enter all the fields")
  }
  };

  return (
    
      <div className="registerdiv">
        <Row className="innerregister">
          <Col className="col-md-6 c4">
            <Form>
              <h1 className="text2">Register!</h1>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={email1}
                  onChange={(e) => setemail(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formUsername">
                <Form.Control
                  type="text"
                  placeholder="Username"
                  value={name1}
                  onChange={(e) => setname(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password1}
                  onChange={(e) => setpassword(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" id="btn3" type="button" onClick={user}>
                Create Account
              </Button>
            </Form>
            <p className="para2">
              Already have an account?
              <Nav.Link href="/signin" id="navlog">
                Login
              </Nav.Link>
            </p>
          </Col>
          <Col className="col-md-6" id="gif4"></Col>
        </Row>
      </div>
    
  );
}
export default Register;
