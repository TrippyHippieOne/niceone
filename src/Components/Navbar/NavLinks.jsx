import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { motion } from "framer-motion";

const NavLinks = (props) => {
    const animateFrom = { opacity: 0, y: -40 };
    const animateTo = { opacity: 1, y: 0 };

    return (
        <ul>
            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.05 }}
            >
                <Link
                    to="/home"
                    onClick={() => props.CloseMobileMenu()}
                >
                    HOME
                </Link>
            </motion.li>
            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.1 }}
            >
                <Link
                    to="/party"
                    onClick={() =>  props.CloseMobileMenu()}
                >
                    PARTY
                </Link>
            </motion.li>
            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.2 }}
            >
                <Link
                    to="/about"
                    onClick={() => props.CloseMobileMenu()}
                >
                    About
                </Link>
            </motion.li>
            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.3 }}
            >
                <Link
                    to="/music"
                    onClick={() =>  props.CloseMobileMenu()}
                >
                    MUSIC
                </Link>
            </motion.li>
            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.4 }}
            >
                <Link
                    to="/contacts"
                    onClick={() =>  props.CloseMobileMenu()}
                >
                    Contact
                </Link>
            </motion.li>
        </ul>
    );
};

export default NavLinks;
