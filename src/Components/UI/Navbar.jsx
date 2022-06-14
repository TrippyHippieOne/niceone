import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const goHome = () => navigate('/home')

    return (
        <div className="navbar">
            <img
                style={{cursor: 'pointer', width: 260, height: 77, marginTop: -3 }}
                src={process.env.PUBLIC_URL + "/qweqwe.jpg"}
                alt="qweqwe"
                onClick={goHome}
            />
            <div className="navbar">
                <Link className="buttonColors" to="/home">
                    HOME
                </Link>
                <Link className="buttonColors" to="/party">
                    PARTY
                </Link>
                <Link className="buttonColors" to="/about">
                    About
                </Link>
                <Link className="buttonColors" to="/music">
                    MUSIC
                </Link>
                <Link className="buttonColors" to="/contacts">
                    Contact{" "}
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
