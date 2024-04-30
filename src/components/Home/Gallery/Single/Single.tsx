import { Link } from "react-router-dom";
import { useContext } from "react";
import { CountriesContext } from "../../../../App";

const Single = () => {
    const { countries } = useContext(CountriesContext);
    if (!countries) {
        return;
    }
    const item = countries.map((el) => (
        <Link className="link" to={`/country/${el.alpha3Code}`} key={el.name}>
            <div className="item">
                <img src={`${el.flag}`} alt="" />
                <div className="content">
                    <h2>{`${el.name}`}</h2>
                    <p>
                        <span className="bold">Population:</span>{" "}
                        {`${el.population}`}
                    </p>
                    <p>
                        <span className="bold">Region:</span> {`${el.region}`}
                    </p>
                    <p>
                        <span className="bold">Capital:</span> {`${el.capital}`}
                    </p>
                </div>
            </div>
        </Link>
    ));
    return <div className="gallery single">{item}</div>;
};

export default Single;
