import React, { useState } from "react";
import { ApolloProvider } from "@apollo/client";
import { useMutation } from "@apollo/client";
// import { render } from "react-dom";
import axios from 'axios'
import { Col, Row, Form, Button, Nav } from "react-bootstrap";
// import { client, Create_User } from "./graph";

function Register() {
  //     const op="dfadf";
  //     var query = `
  //     mutation createuser($uemail: String!,$upassword: String!,$uusername: String!,$ucity:String,$ustate:String,$ucountry:String,$ugender:String,$uimage:String,$uname:String){
  //       createUser(email: $uemail,password: $upassword,username: $uusername,city:$ucity,state:$ustate,country:$ucountry,gender:$ugender,image:$uimage,name:$uname) {
  //       __typename
  //       }
  //     }
  //   `
  //     const proxyurl = "https://cors-anywhere.herokuapp.com/";
  // const [createUser, { data }] = useMutation(Create_User);
  const [email1, setemail] = useState("");
  const [name1, setname] = useState("");
  const [password1, setpassword] = useState("");
  const user = (e) => {
    e.preventDefault();
    axios.post(`https://duolouge-backend.herokuapp.com/graphql/`,{
      query:`
      mutation Register($email: String!, $pass: String!, $username: String!) {
        createUser(email: $email, password: $pass, username: $username) {
          __typename
        }
      }
    `,
    variables:{
      email:email1,
      password:password1,
      username: name1
    },
    headers: {
      "Access-Control-Allow-Origin": "*" ,
      "X-Requested-With": "XMLHttpRequest",
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': "JWT "// Required for CORS support to work
  }
    
    })
    //         fetch(proxyurl+"duolouge-backend.herokuapp.com/graphql/",{

    //             method: 'POST',
    //         headers: {
    //             "X-Requested-With": "XMLHttpRequest",
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json',
    //             'Authorization': "JWT "
    //         },
    //         body: JSON.stringify({
    //             query,
    //             variables:{email1,password1,name1,op,op,op,op,op,op}
    //         })
    //     }) .then(r => r.json())
    //     .then(data => console.log('data returned:', data.data));

    // createUser({
    //   variables: { email: email1, password: password1, username: name1 },
    // });
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
