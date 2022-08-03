import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { CgMenuRound } from "react-icons/cg";
import { CgCloseO } from "react-icons/cg";
import { useState } from "react";

const NavLinks = () => {
    const navigate = useNavigate();
    const goHome = () => navigate("/home");
    const [open, setOpen] = useState(false);

    return (
        <ul>
            {/* <img
                className="img"
                src={process.env.PUBLIC_URL + "/logo.png"}
                alt="qweqwe"
                onClick={goHome}
            /> */}
            <li>
                <a href="/home">
                    HOME
                </a>
            </li>
            <li>
                <a href="/party">
                    PARTY
                </a>
            </li>
            <li>
                <a href="/about">
                    About
                </a>
            </li>
            <li>
                <a href="/music">
                    MUSIC
                </a>
            </li>
            <li>
                <a href="/contacts">
                    Contact
                </a>
            </li>
        </ul>
    );
};

export default NavLinks;
