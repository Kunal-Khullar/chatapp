import React,{useState,useEffec} from "react";
import {usePosition} from "use-position"
import { Col,Row,Form,Button,FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {fas, faSearch} from '@fortawesome/free-solid-svg-icons'
 function Finduser()
{
    const [lat,setLat] = useState("");
    const [long,setLong] = useState("");
    const getLocation =  () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        } else {
         alert("Geolocation is not supported by this browser.");
        }
      }
      
      const  showPosition = (position)=> {
       setLat(position.coords.latitude)
       setLong(position.coords.longitude)
      }
console.log(lat, long)
       fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lat}%2C+${long}&key=efe8f8cf9ec6408f8064758d8fb335d9&pretty=1`).then(response =>response.json())
    .then(data =>{
        console.log(data)
    })
    getLocation();
    return(
        <div className="searchUsers">
        <h1>Users in Your Area</h1>
        <Form className="row">
            <Form.Group controlId="searchUser">
    
    <Form.Control type="text" placeholder="Search" />
  </Form.Group>
  <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        </Form>
        <div className="userchats">
                <Row className="r2">
                    <div className="userspic">
                        <img className="userpic" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="user"/>
                    </div>
                    <div className="chatinfo">
                    <h6>Noob User</h6>
                   <Button>Message</Button>
                </div>
                </Row>
            </div>
        </div>

    );
}
export default Finduser;