import { Link } from "react-router-dom";
import "../../App.css";
import "./header.css";
import { FaRegMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa";
import { useContext } from "react";
import { DarkmodeContext } from "../../App";

const Header = () => {
    const { darkmode, setDarkmode } = useContext(DarkmodeContext);

    return (
        <div className="header-container">
            <div className="header">
                <Link to="/" className="header-link">
                    Where in the world?
                </Link>
                <button
                    className="header-btn"
                    onClick={() => setDarkmode((state) => !state)}
                >
                    {darkmode ? (
                        <>
                            <FaRegSun />
                            Light Mode
                        </>
                    ) : (
                        <>
                            <FaRegMoon /> Dark mode
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};

export default Header;
