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
            if (await auth.signInWithEmailAndPassword(username,password)) {
                var user = fireapp.auth().currentUser;
                if (user != null) {
                    uid = user.email;
                    localStorage.setItem("currentUser", uid);
                    // await db.collection(uid).doc("profile").get().then(function(doc) {
                    //     userName = doc.data().name
                    //         // userPhone = doc.data().phone
                    // })
                    // localStorage.setItem("currUserName",userName); 
                    
                    console.log(localStorage.getItem("currentUser"))
                    history.push("/home")
                }
            }
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
