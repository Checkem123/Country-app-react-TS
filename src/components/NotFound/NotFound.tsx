import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

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
            <div className="loading">
                <h2>
                    I think you're lost, the data you're looking for is in
                    another castle...
                </h2>
            </div>
        </div>
    );
};

export default NotFound;
