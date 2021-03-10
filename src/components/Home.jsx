import React from "react";
import "../App.css";
import Sidebar from "./Sidebar";
import Chats from "./Chats";
function Home() {
  return (
    <>
    <div id="app_body">
      <div className="box">
        <Sidebar/>
        <Chats/>
        <div className="Profile_view"></div>
      </div>
    </div>
   </> 
  );
}
export default Home;
