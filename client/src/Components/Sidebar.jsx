import React from "react";
import Titlebar from "./Navbar"
import Search from "./Search"
import Chats from "./Chats"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Titlebar />
      <Search/>
      <Chats/>
    </div>
  );
};

export default Sidebar;