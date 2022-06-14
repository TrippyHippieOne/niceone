import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React, { useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Footer.css"
import { Navigate } from "react-router-dom";

const Footer = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <footer className="footer">
            <BottomNavigation
                value={value}
                onChange={handleChange}
            >
                <BottomNavigationAction
                    label="Instagram"
                    value="instagram"
                    style={{color: "white", backgroundColor: "black"}}
                    icon={<InstagramIcon />}
                    
                />
                <BottomNavigationAction
                    label="Facebook"
                    value="facebook"
                    style={{color: "white", backgroundColor: "black"}}
                    icon={<FacebookIcon />}
                />
                <BottomNavigationAction
                    label="YouTube"
                    value="youtube"
                    style={{color: "white", backgroundColor: "black"}}
                    icon={<YouTubeIcon />}
                    href="https://www.youtube.com/c/ShiftMoscow"
                    target="_blank"
                />
            </BottomNavigation>
        </footer>
    );
};

export default Footer;
