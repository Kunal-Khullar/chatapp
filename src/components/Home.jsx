import React,{useState} from "react";
import { Col,Row} from "react-bootstrap";
import {Route,HashRouter} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Allchats from './Allchats';
import Finduser from './Finduser';
import Settings from './Settings';
import { faUserCircle,faCog,faCommentAlt,faSearch,faPowerOff,faSmileBeam,faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { from } from "@apollo/client";
import { NavLink } from "react-router-dom";
function Home()
{
    return (
        <HashRouter>
       <div className="maincontainer">
           <Row className="innercontainer">
                <Col className="menu col-md-3">
                    <div className="userinfo">
                    <FontAwesomeIcon className="userphoto" icon={faUserCircle}></FontAwesomeIcon>
                    <h4 className="userNames">Harman Noob</h4>
                    </div>
                    <div className="menuoptions">
                    <NavLink exact to="/finduser">  <div className="option">
                            <Row className="r1">
                                <FontAwesomeIcon className="optionicon" icon={faSearch}></FontAwesomeIcon>
                                <h5 className="optiontag">Find</h5>
                            </Row>
                        </div></NavLink>
                        <NavLink exact to="/"><div className="option">
                            <Row  className="r1">
                                <FontAwesomeIcon className="optionicon" icon={faCommentAlt}></FontAwesomeIcon>
                               <h5 className="optiontag">Chats</h5>
                            </Row>
                        </div></NavLink>
                        <NavLink exact to="/settings">   <div className="option">
                            <Row  className="r1">
                                <FontAwesomeIcon className="optionicon" icon={faCog}></FontAwesomeIcon>
                              <h5 className="optiontag">Settings</h5>
                            </Row>
                        </div></NavLink>
                        <div className="option">
                            <Row  className="r1">
                                <FontAwesomeIcon className="optionicon" icon={faPowerOff}></FontAwesomeIcon>
                                <h5 className="optiontag">Logout</h5>
                            </Row>
                        </div>
                    </div>
                </Col>
                <Col className="col-md-9 messaging">
                    {/* <Allchats></Allchats> */}
                  <Route exact path="/" component={Allchats}></Route>
                  <Route exact path="/finduser" component={Finduser}></Route>
                  <Route exact path="/settings" component={Settings}></Route>
                  
                </Col>
           </Row>
       </div>
       </HashRouter>
    );
}

export default Home;
