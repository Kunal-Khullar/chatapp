import React,{useState} from "react";
import { Col,Row,Form,Button,FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { db,storageRef } from "./firebase";

function Settings()
{    
    var metadata = {
        contentType: 'image/jpeg',
      };
    const [imageAsFile, setImageAsFile] = useState('')
    const[gender,setGender]=useState("");
    const[userName,setname] = useState("");
    const[email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const[state,setState] = useState("");
    const[city,setCity] = useState("");
  
   
    
   
    let chat = [];
    db.collection("userprofiles").doc("kunalkhullar5012@gmail.com").get().then(function(doc){
        // gp = doc.data().gender;
        // cp=doc.data().city;
        // sp=doc.data().state;
        // ep=doc.data().email;
        // np=doc.data().name;
        // pp=doc.data().phone;
        setGender(doc.data().gender)
        setname(doc.data().name)
        setEmail(doc.data().email)
        setPhone(doc.data().phone)
        setCity(doc.data().city)
        setState(doc.data().state)
        chat=doc.data().chats;
    })

    const savedata =async (e)=>{
        e.preventDefault();
        //  setName();
        const fileList = document.getElementById("uploadedimage").files;
         console.log(gender)
         console.log(userName);
         console.log(email);
         console.log(phone);
         console.log(state);
         console.log(city);
         db.collection("userprofiles").doc("kunalkhullar5012@gmail.com").update({
             email:email,
             name:userName,
             gender:gender,
             city:city,
             state:state,
             phone:phone,
             
         })
         for(let i=0;i<chat.length;i++){
             db.collection("userprofiles").doc(chat[i]).get().then(function(doc){
                 console.log(doc.data());
             })
         }
         await storageRef.child(`images/${fileList[0].name}`).put(fileList[0], metadata);
            storageRef.child(`images/${fileList[0].name}`).getDownloadURL()
            .then(url=>{
                console.log(url)
                document.getElementById('displayimage').setAttribute("src",url)
                db.collection("userprofiles").doc("knalkhullar5012@gmail.com").update({
                    image:url
                })
            })
         
    }
    return(
        <div className="parent2">
        <h2>Settings</h2>
        <div className="changephoto">
        <h6>Avatar</h6>
            <Row>
                
                <div className="innerimg">
                    <img id='displayimage' src="https://firebasestorage.googleapis.com/v0/b/duo-louge.appspot.com/o/user_default.png?alt=media&token=a27eb92b-8292-4e0c-84d3-5db84b1b18d0" alt=""/>
                </div>
                <input id="uploadedimage" type="file" name="somename"    hidden ></input>
                <label id="profileimage" htmlFor="uploadedimage">Upload</label>
                
                <Button className="btn-secondary btn6" id="mybtn1">Remove</Button>
            </Row>
        </div>
        <div className="details1">
            <Row>
                <Col className="col-md-6">
                <div className="takename">
                    <h6>Username</h6>
                    <FormControl  type="text"value ={userName} onChange={(e)=>{setname(e.target.value)}} ></FormControl>
                </div>
                </Col>
                <Col className="col-md-6">
                <div className="takegender">
                    <h6>Gender</h6>
                    <Form>
  <Form.Group controlId="exampleForm.SelectCustom">
    
    <Form.Control as="select"   name="gender" value={gender} onChange={(e)=>{setGender(e.target.value)}} custom>
        
      <option  value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Other">Other</option>
      
      
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
                    <FormControl  type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}></FormControl>
                </div>
                </Col>
                <Col className="col-md-6">
                <div className="takename">
                <h6>Phone Number</h6>
                    <FormControl  type="text"value={phone} onChange={(e)=>{setPhone(e.target.value)}}></FormControl>
                </div>
                </Col>
            </Row>
        </div>
        <div className="details1">
        <Row>
                <Col className="col-md-6">
                <div className="takename">
                    <h6>State</h6>
                    <FormControl type="text" value={state} onChange={(e)=>{setState(e.target.value)}}></FormControl>
                </div>
                </Col>
                <Col className="col-md-6">
                <div className="takename">
                <h6>City</h6>
                    <FormControl  type="text" value={city} onChange={(e)=>{setCity(e.target.value)}}></FormControl>
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
        <Button type="button" className="btn6   " id="mybtn4" onClick ={savedata}>SAVE CHANGES </Button>
        </div>
</div>
    );

}
export default Settings;