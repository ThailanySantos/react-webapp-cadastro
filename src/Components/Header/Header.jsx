import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import "./Header.css";
import LogoHbi from "../../assets/somoshbi_logo.jfif";

const Header = () => {
  return (
    <AppBar position="static" className="header">
      <Toolbar className="toolbar">
        <img src={LogoHbi} alt="Logo" className="logo" />
        <Typography
          variant="h6"
          className="header-title"
        >
          Teste Técnico
        </Typography>
        <Avatar
          alt="User Avatar"
          src="https://media.licdn.com/dms/image/D4D03AQEV8OfmLqvDTA/profile-displayphoto-shrink_800_800/0/1718749286231?e=1727308800&v=beta&t=QNDqnEZJcTKVRoFs4pHabZE6sTzYb2au8WDQvWmNdio"
          className="avatar"
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
