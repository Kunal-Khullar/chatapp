import React,{useState} from "react";
import { Col,Row,Form,Button,FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle,faCog,faCommentAlt,faSearch,faPowerOff } from '@fortawesome/free-solid-svg-icons'
function Home()
{
    return (
       <div className="maincontainer">
           <Row className="innercontainer">
                <Col className="menu col-md-3">
                    <div className="userinfo">
                    <FontAwesomeIcon className="userphoto" icon={faUserCircle}></FontAwesomeIcon>
                    <h4 className="userNames">Harman Noob</h4>
                    </div>
                    <div className="menuoptions">
                        <div className="option">
                            <Row className="r1">
                                <FontAwesomeIcon className="optionicon" icon={faSearch}></FontAwesomeIcon>
                                <h5 className="optiontag">Find</h5>
                            </Row>
                        </div>
                        <div className="option">
                            <Row  className="r1">
                                <FontAwesomeIcon className="optionicon" icon={faCommentAlt}></FontAwesomeIcon>
                                <h5 className="optiontag">Chats</h5>
                            </Row>
                        </div>
                        <div className="option">
                            <Row  className="r1">
                                <FontAwesomeIcon className="optionicon" icon={faCog}></FontAwesomeIcon>
                                <h5 className="optiontag">Settings</h5>
                            </Row>
                        </div>
                        <div className="option">
                            <Row  className="r1">
                                <FontAwesomeIcon className="optionicon" icon={faPowerOff}></FontAwesomeIcon>
                                <h5 className="optiontag">Logout</h5>
                            </Row>
                        </div>
                    </div>
                </Col>
                <Col className="col-md-9 messaging">
                    <h2>Chat</h2>
                    <Row className="r2">
                        <Col className="col-lg-6 ">
                            <div className="allchats">
                                <div className="searchbar">
                                <FormControl type="text" placeholder="Search" className="mr-sm-2"></FormControl>
                                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                                </div>
                                <div className="userchats">
                                    <Row className="r2">
                                        <div className="userspic">
                                            <img className="userpic" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="user"/>
                                        </div>
                                        <div className="chatinfo">
                                        <h6>Noob User</h6>
                                        <p>Most recent message here</p>
                                    </div>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col className="col-lg-6">
                            <div className="currentchat">

                            </div>
                        </Col>
                    </Row>
                </Col>
           </Row>
       </div>
    );
}

export default Home;
