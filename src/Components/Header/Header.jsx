import React from "react";
import { Link, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import thai from "../../Assets/thai.jpeg";

const Header = () => {
  const location = useLocation();
  const naHomePage = location.pathname === "/";

  return (
    <AppBar position="static" className="header">
      <Toolbar className="toolbar" style={{ marginLeft: "10px" }}>
        {naHomePage ? (
          <FontAwesomeIcon
            icon={faChevronLeft}
            style={{ color: "#113981", cursor: "default" }}
          />
        ) : (
          <Link to="/" className="logo-link">
            <FontAwesomeIcon
              icon={faChevronLeft}
              style={{ color: "#ffffff", cursor: "pointer" }}
            />
          </Link>
        )}
        <Typography variant="h6" className="header-title">
           WebApp Cadastro
        </Typography>
        <Avatar alt="User Avatar" src={thai} className="avatar" style={{ marginRight: "10px" }}/>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
