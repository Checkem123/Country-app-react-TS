import { Link } from "react-router-dom";
import "../../App.css";
import "./header.css";
import { FaRegMoon } from "react-icons/fa";

const Header = () => {
    return (
        <div className="header-container">
            <div className="header">
                <Link to="/" className="header-link">
                    Where in the world?
                </Link>
                <button className="header-btn">
                    <FaRegMoon />
                    Light Mode
                </button>
            </div>
        </div>
    );
};

export default Header;
