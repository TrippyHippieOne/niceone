import React from "react";
import NavLinks from "./NavLinks";
import { CgMenuRound } from "react-icons/cg";
import { CgCloseO } from "react-icons/cg";
import { useState } from "react";

const MobileNavigation = () => {
    const [open, setOpen] = useState(false);

    const hamburgerIcon = (
        <CgMenuRound
            className="hamburger"
            size="50px"
            color="white"
            onClick={() => setOpen(!open)}
        />
    );

    const closeIcon = (
        <CgCloseO
            className="hamburger"
            size="50px"
            color="white"
            onClick={() => setOpen(!open)}
        />
    );

    return (

        <nav className="mobile__navigation">
            {open ? closeIcon : hamburgerIcon}
            {open && <NavLinks />}
        </nav>
    );
};

export default MobileNavigation;
