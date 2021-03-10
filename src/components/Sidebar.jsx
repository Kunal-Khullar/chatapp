import React from "react";
import "../App.css";
import SidebarChat from "./SidebarChat";
// import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SettingsIcon from "@material-ui/icons/Settings";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { Avatar } from "@material-ui/core";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="header">
        <div className="Header_icon">
          <Avatar src="" />
        </div>
        <div className="info">
          <p>Jerry Wilson</p>
          <p className="job">UI Designer</p>
        </div>
        <div className="settings">
          <SettingsIcon />
        </div>
      </div>

      <div id="search_bar">
        <div className="search_icon">
          <SearchOutlinedIcon />
        </div>
        <div>
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <h6>Recent Chats</h6>
      <SidebarChat />
      <SidebarChat />
      <SidebarChat />
    </div>
  );
}

export default Sidebar;
