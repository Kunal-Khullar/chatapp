import { IconButton } from "@material-ui/core";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import EmojiEmotionsRoundedIcon from "@material-ui/icons/EmojiEmotionsRounded";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import React from "react";
import "../App.css";

const date = new Date();
let AMPM = "am";
let hr = date.getHours();
let min=date.getMinutes();
if (date.getHours() > 12) {
  AMPM = "pm";
  hr = date.getHours() - 12;
}
if (date.getHours() == 0) {
  hr = date.getHours() + 12;
}
if(date.getMinutes()<10)
{
  min = `0${date.getMinutes()}`;
}

function Chats() {
  return (
    <div className="Chat_section">
      <div className="chats">
        <div className="chatting reciever">
          <h6>Jerry Wilson</h6>
          <div className="chat_content ">
            <p>
              hey how are you doing...
              <span className="time_stamp">
                {hr}:{min}
                {AMPM}
              </span>
            </p>
          </div>
        </div>
        <div className="chatting">
          <h6>Tom Mathew</h6>
          <div className="chat_content ">
            <p>
              hey
              <span className="time_stamp">
                {hr}:{min}
                {AMPM}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="chat_footer">
        <input type="text" placeholder="Enter chat"></input>
        <InsertEmoticonIcon />
        <IconButton>
          <SendRoundedIcon />
        </IconButton>
      </div>
    </div>
  );
}
export default Chats;
