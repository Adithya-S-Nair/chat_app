import React, { useContext } from "react";
// import Cam from "../img/cam.png";
// import Add from "../img/add.png";
// import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
    return (
        <div className="chat">
            <div className="chatInfo">
                <div className="user">
                    <img src="https://cdn5.vectorstock.com/i/1000x1000/92/89/hipster-avatar-image-vector-19639289.jpg" alt="" />
                    <span>James</span>
                </div>
                <div className="chatIcons">
                    <button>
                        <i className="fa-solid fa-ellipsis fa-rotate-90"></i>
                    </button>
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    );
};

export default Chat;