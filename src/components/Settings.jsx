import React,{useState} from "react";
import { Col,Row,Form,Button,FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Settings()
{
    return(
        <div className="parent2">
        <h2>Settings</h2>
        <div className="changephoto">
        <h6>Avatar</h6>
            <Row>
                
                <div className="innerimg">
                    <img src="https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg" alt=""/>
                </div>
                <Button className="btn-primary btn6" id="mybtn2" >Upload</Button>
                <Button className="btn-secondary btn6" id="mybtn1">Remove</Button>
            </Row>
        </div>
        <div className="details1">
            <Row>
                <Col className="col-md-6">
                <div className="takename">
                    <h6>Username</h6>
                    <FormControl placeholder="Current Username" type="text"></FormControl>
                </div>
                </Col>
                <Col className="col-md-6">
                <div className="takegender">
                    <h6>Gender</h6>
                    <Form>
  <Form.Group controlId="exampleForm.SelectCustom">
    
    <Form.Control as="select" custom>
        
      <option defaultValue value="M">Male</option>
      <option value="F">Female</option>
      <option value="O">Other</option>
      
      
    </Form.Control>
  </Form.Group>
</Form>
                </div>
                </Col>
            </Row>
        </div>
        <div className="details1">
        <Row>
                <Col className="col-md-6">
                <div className="takename">
                    <h6>Email</h6>
                    <FormControl placeholder="currentemail@gmail.com" type="email"></FormControl>
                </div>
                </Col>
                <Col className="col-md-6">
                <div className="takename">
                <h6>Phone Number</h6>
                    <FormControl placeholder="000000000" type="text"></FormControl>
                </div>
                </Col>
            </Row>
        </div>
        <div className="details1">
        <Row>
                <Col className="col-md-6">
                <div className="takename">
                    <h6>State</h6>
                    <FormControl placeholder="Current state" type="text"></FormControl>
                </div>
                </Col>
                <Col className="col-md-6">
                <div className="takename">
                <h6>City</h6>
                    <FormControl placeholder="Current city" type="text"></FormControl>
                </div>
                </Col>
            </Row>
        </div>
        <Row id="myrow1">
            <Col className="col-md-6">
            <div className="details1">
                <h6>Delete Account</h6>
                <p>You will lose all your data by deleting your account.</p>
                </div>
            </Col>
            <Col className="col-md-6">
            <Button type="button" className="btn-danger" id="mybtn3">Delete Account...</Button>
            </Col>
        </Row>
        <div className="details1">
        <Button type="button" className="btn6   " id="mybtn4">SAVE CHANGES</Button>
        </div>
</div>
    );

}
export default Settings;