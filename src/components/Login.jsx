import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Button from "react-bootstrap/Button";
import myvideo from "./myvideo.mp4";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
function Login() {
  return (
    <div className="videodiv">
      <video autoPlay loop muted id="myVideo">
        <source
          src="https://firebasestorage.googleapis.com/v0/b/duo-louge.appspot.com/o/myvideo.mp4?alt=media&token=6a1049c2-70c8-4d75-b36f-cf141b5d7c69"
          type="video/mp4"
        />
      </video>
      <div className="App">
        <div className="login_container">
          <Navbar expand="lg">
            <Navbar.Brand id="navlogo" href="#home">
              Duolouge
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="c2" id="basic-navbar-nav">
              <Nav className="c2 c3">
                <Nav.Link id="hlink">About Us</Nav.Link>
                <Nav.Link href="/register">
                  <Button id="register" className="btn btn-primary">
                    Sign Up
                  </Button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Row className="row">
            <Col className="col-md-6">
              <div className="c1">
                <h1 className="text1">Connect.</h1>
                <h1 className="text1">Grow.</h1>
                <h1 className="text1">Inspire.</h1>
                <p className="para1">
                  Engage with your friends through a full feature chat
                  integration.
                </p>
                <Nav.Link href="/signin">
                  <Button id="btn1" className="btn btn-primary">
                    Sign In
                  </Button>
                </Nav.Link>
              </div>
            </Col>
            {/* <Col className="col-md-6">
    <img id="img1" src={mygif}></img>
  </Col> */}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Login;
