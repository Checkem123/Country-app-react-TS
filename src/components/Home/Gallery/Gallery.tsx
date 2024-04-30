import Multiple from "./Multiple/Multiple";
import Single from "./Single/Single";
import "./gallery.css";
import { useContext } from "react";
import { CountriesContext } from "../../../App";

const Gallery = () => {
    const { countries } = useContext(CountriesContext);

    if (!countries) {
        return (
            <div className="loading">
                <h2>loading...</h2>
            </div>
        );
    }

    if (countries.length === 0) {
        return (
            <div className="not-found">
                <h2>0 countries found with that name, try again...</h2>
            </div>
        );
    }

    return countries.length > 1 ? <Multiple /> : <Single />;
};

export default Gallery;
