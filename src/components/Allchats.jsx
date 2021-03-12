import React,{useState} from "react";
import { Col,Row,Form,Button,FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle,faCog,faCommentAlt,faSearch,faPowerOff,faSmileBeam,faPaperPlane } from '@fortawesome/free-solid-svg-icons'
function Allchats()
{
    return(
        <div className="parent">
<h2>All Chats</h2>
<Row className="r2">
    <Col className="col-lg-5 ">
        <div className="allchats" id="style7">
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
                    <p className="para3">Most recent message here</p>
                </div>
                </Row>
            </div>
            <div className="userchats">
                <Row className="r2">
                    <div className="userspic">
                        <img className="userpic" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="user"/>
                    </div>
                    <div className="chatinfo">
                    <h6>Noob User</h6>
                    <p className="para3">Most recent message here</p>
                </div>
                </Row>
            </div>
            <div className="userchats">
                <Row className="r2">
                    <div className="userspic">
                        <img className="userpic" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="user"/>
                    </div>
                    <div className="chatinfo">
                    <h6>Noob User</h6>
                    <p className="para3">Most recent message here</p>
                </div>
                </Row>
            </div>
            <div className="userchats">
                <Row className="r2">
                    <div className="userspic">
                        <img className="userpic" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="user"/>
                    </div>
                    <div className="chatinfo">
                    <h6>Noob User</h6>
                    <p className="para3">Most recent message here</p>
                </div>
                </Row>
            </div>
            <div className="userchats">
                <Row className="r2">
                    <div className="userspic">
                        <img className="userpic" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="user"/>
                    </div>
                    <div className="chatinfo">
                    <h6>Noob User</h6>
                    <p className="para3">Most recent message here</p>
                </div>
                </Row>
            </div>
         
        </div>
    </Col>
    <Col className="col-lg-7 c5">
        <div className="currentchat">
        <div className="currentuserchats">
                <Row className="r3">
                    <div className="userspic">
                        <img className="userpic" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="user"/>
                    </div>
                    <div className="chatinfo">
                    <h6>Noob User</h6>
                    
                </div>
                <div className="status"></div>
                </Row>
            </div>
            <div className="messages">
                <div className="recieved">Hello</div>
                <div className="sent">Hello noob</div>
            </div>
            <div className="typemessage ">
                <Row>
            <FormControl as="textarea" placeholder="Enter your message" aria-label="With textarea" />
         
            <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
            </Row>
            </div>
        </div>
    </Col>
</Row>
</div>
    );
}
export default Allchats