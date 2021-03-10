import React,{useState} from "react";
import { Col,Row,Form,Button,Nav } from "react-bootstrap";
function Register()
{
    return(
        <div className="registerdiv">
           
        <Row className="innerregister">
      
            <Col className="col-md-6 c4">
            <Form>
                <h1 className="text2">Register!</h1>
<Form.Group controlId="formBasicEmail">
 
 <Form.Control type="email" placeholder="Email" />
 
</Form.Group>
<Form.Group controlId="formUsername">
 
 <Form.Control type="text" placeholder="Username" />
 
</Form.Group>

<Form.Group controlId="formBasicPassword">
 
 <Form.Control type="password" placeholder="Password" />
</Form.Group>

<Button variant="primary" id="btn3" type="button">
 Create Account
</Button>
</Form>
     <p className="para2">Already have an account?<Nav.Link href="/signin" id="navlog">Login</Nav.Link></p>
            </Col>
            <Col className="col-md-6" id="gif4">
             
             </Col>
        </Row>
    </div>
 
    );
}
export default Register;