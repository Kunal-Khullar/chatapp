import React,{useState} from "react";
import { Col,Row,Form,Button,FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {fas, faSearch} from '@fortawesome/free-solid-svg-icons'
function Finduser()
{
    return(
        <div className="searchUsers">
        <h1>Users in Your Area</h1>
        <Form className="row">
            <Form.Group controlId="searchUser">
    
    <Form.Control type="text" placeholder="Search" />
  </Form.Group>
  <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        </Form>
      
        </div>

    );
}
export default Finduser;