import './App.css';
// import mygif from './mygif.gif';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import myvideo from './myvideo.mp4';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


import Button from 'react-bootstrap/Button';
function App() {
  return (
    
    <div className="videodiv">
      <video autoPlay loop muted id="myVideo" >
        <source src={myvideo} type="video/mp4" />
      </video>
    <div className="App">
     <div className="login_container">
     <Navbar expand="lg">
  <Navbar.Brand id="navlogo" href="#home">Duolouge</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link id="hlink" >About Us</Nav.Link>
      <Button id="register" className="btn btn-primary">Sign Up</Button>
     
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
<Row className="row">
  <Col className="col-md-6">
    <div className="c1">
      <h1 className="text1">Connect.</h1>
      <h1 className="text1">Grow.</h1>
      <h1 className="text1">Inspire.</h1>
      <p className="para1">Engage with your friends through a full feature chat integration.</p>
      <Button className="btn btn-primary">Sign In</Button>
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

export default App;
