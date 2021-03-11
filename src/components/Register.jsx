import React,{useState} from "react";
import { Col,Row,Form,Button,Nav } from "react-bootstrap";
function Register()
{
    const [email,setemail]= useState("");
    const [name,setname]= useState("");
    const [password,setpassword]= useState("")
    const user= (e)=>{
        e.preventDefault();
        console.log(email);
        console.log(name);
        console.log(password);
    }
    return(
        <div className="registerdiv">
           
        <Row className="innerregister">
      
            <Col className="col-md-6 c4">
            <Form>
                <h1 className="text2">Register!</h1>
<Form.Group controlId="formBasicEmail">
 
 <Form.Control type="email" placeholder="Email" value={email} onChange={(e)=>(setemail(e.target.value))}/>
 
</Form.Group>
<Form.Group controlId="formUsername">
 
 <Form.Control type="text" placeholder="Username" value={name} onChange={(e)=>(setname(e.target.value))} />
 
</Form.Group>

<Form.Group controlId="formBasicPassword">
 
 <Form.Control type="password" placeholder="Password" value = {password} onChange={(e)=>(setpassword(e.target.value))} />
</Form.Group>

<Button variant="primary" id="btn3" type="button" onClick={user}>
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