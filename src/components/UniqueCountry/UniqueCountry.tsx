import { useParams } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import "./uniquecountry.css";
import { CountriesProps } from "../../types";
import NotFound from "../NotFound/NotFound";

interface UniqueCountryProps {
    countries: CountriesProps[] | null;
}

const Country = ({ countries }: UniqueCountryProps) => {
    const { name } = useParams();

    const btnStyle = {
        marginRight: "6px",
        fontSize: "22px",
    };

    if (!countries) {
        return (
            <div className="container">
                <Link to="/" style={{ display: "inline-block" }}>
                    <button className="back-btn">
                        <GoArrowLeft style={btnStyle} />
                        Back
                    </button>
                </Link>
                <div className="loading">
                    <h2>loading...</h2>
                </div>
            </div>
        );
    }

    const targetCountry = countries.filter((el) => el.alpha3Code === name)[0];

    if (!targetCountry) {
        return <NotFound />;
    }

    return (
        <div className="container">
            <Link to="/" style={{ display: "inline-block" }}>
                <button className="back-btn">
                    <GoArrowLeft style={btnStyle} />
                    Back
                </button>
            </Link>

            <div className="middle-block">
                <img src={`${targetCountry?.flag}`} alt="" />
                <div className="infos">
                    <div className="info">
                        <div className="info-left">
                            <h2>{`${targetCountry?.name}`}</h2>
                            <p>
                                <span className="bold">Native Name:</span>{" "}
                                {`${targetCountry?.nativeName}`}
                            </p>
                            <p>
                                <span className="bold">Population:</span>{" "}
                                {`${targetCountry?.population}`}
                            </p>
                            <p>
                                <span className="bold">Region:</span>{" "}
                                {`${targetCountry?.region}`}
                            </p>
                            <p>
                                <span className="bold">Sub Region:</span>{" "}
                                {`${targetCountry?.subregion}`}
                            </p>
                            <p>
                                <span className="bold">Capital:</span>{" "}
                                {`${targetCountry?.capital}`}
                            </p>
                        </div>
                        <div className="info-right">
                            <p>
                                <span className="bold">Top Level Domain:</span>{" "}
                                {`${targetCountry?.topLevelDomain}`}
                            </p>
                            <p>
                                <span className="bold">Currency:</span>{" "}
                                {`${targetCountry?.currencies[0].name}`}
                            </p>
                            <p>
                                <span className="bold">Languages:</span>{" "}
                                {`${targetCountry?.languages
                                    .map((el) => el.name)
                                    .join(", ")}`}
                            </p>
                        </div>
                    </div>
                    <div className="info-bottom">
                        <p>
                            <span className="bold">Border Countries:</span>
                        </p>
                        <ul>
                            {targetCountry?.borders?.length > 1 ? (
                                targetCountry.borders?.map((el) => (
                                    <Link to={`/country/${el}`} key={el}>
                                        <li>{el}</li>
                                    </Link>
                                ))
                            ) : (
                                <li>No border found</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Country;
