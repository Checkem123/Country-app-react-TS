import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import "./notfound.css";

const NotFound = () => {
    const btnStyle = {
        marginRight: "6px",
        fontSize: "22px",
    };

    return (
        <div className="container">
            <Link to="/" style={{ display: "inline-block" }}>
                <button className="back-btn">
                    <GoArrowLeft style={btnStyle} />
                    Back
                </button>
            </Link>
            <div className="loading-notfound">
                <h2>404</h2>
                <h3>Not Found</h3>
                <h4>
                    The resource requested could not be found on this server!
                </h4>
            </div>
        </div>
    );
};

export default NotFound;
