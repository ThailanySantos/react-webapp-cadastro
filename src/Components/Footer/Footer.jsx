import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import "./Footer.css";

const Footer = () => {
  const date = new Date().toLocaleDateString();
  return (
    <BottomNavigation className="footer">
      <div className="footer-content">
        <p>Data: {date}</p>
      </div>
    </BottomNavigation>
  );
};

export default Footer;
