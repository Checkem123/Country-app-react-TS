import Gallery from "./Gallery/Gallery";
import Searchbar from "./Searchbar/Searchbar";
import "./home.css";

const Home = () => {
    return (
        <div className="container">
            <Searchbar />
            <Gallery />
        </div>
    );
};

export default Home;
