import React, { useEffect, useState } from "react";
import {Avatar} from "@material-ui/core";
import "../App.css";

function Sidechat(){
    const [icon,seticon]= useState("");
    useEffect(()=>{
       seticon(Math.floor(Math.random()*5000));
       console.log(icon);
    },[])


    return(
        <div className="Allchats">
            <div className="face"><Avatar src={`https://avatars.dicebear.com/api/human/${icon}.svg`}/></div>
            <div className="recent_chats">
                <h6>Group Name</h6>
                <h6 className="sidechat">Recent Chat</h6>
            </div>
        </div>
    )
}

export default Sidechat;