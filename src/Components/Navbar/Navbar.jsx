import MobileNavigation from "./MobileNavigation";
import "./Navbar.css";
import Navigation from "./Navigation";

const Navbar = () => {
    return (
        <div className="navbar">
            <Navigation/>
            <MobileNavigation/>
        </div>
    );
};

export default Navbar;
