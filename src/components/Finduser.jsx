import React,{useState} from "react";
import { Col,Row,Form,Button,FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Finduser()
{
    return(
        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
    
    <Form.Control type="text" placeholder="Search" />
  </Form.Group>
        </Form>
    );
}
export default Finduser;