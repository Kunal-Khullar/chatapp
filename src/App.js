import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


import Button from 'react-bootstrap/Button';
function App() {
  return (
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
  <Col className="col-md-4"></Col>
  <Col className="col-md-8"></Col>
</Row>
     </div>
    </div>
  );
}

export default App;
