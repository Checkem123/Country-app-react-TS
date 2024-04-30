import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { CountriesContext } from "../../../../App";
import Pagination from "./Pagination/Pagination";

const Multiple = () => {
    const { countries } = useContext(CountriesContext);
    const [currentPage, setCurrentPage] = useState(1);
    const countriesPerPage = 8;

    useEffect(() => {
        setCurrentPage(1);
    }, [countries]);
    
    if (!countries) {
        return;
    }
    // Calculate the index range for the countries to display on the current page
    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const currentCountries = countries.slice(
        indexOfFirstCountry,
        indexOfLastCountry
    );

    // Change page
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    // Check if pagination is needed
    const showPagination = countries.length > countriesPerPage;

    const items = currentCountries.map((el) => (
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

    return (
        <>
            <div className="gallery">{items}</div>
            {showPagination && (
                <Pagination
                    countriesPerPage={countriesPerPage}
                    totalCountries={countries.length}
                    paginate={paginate}
                    currentPage={currentPage}
                />
            )}
        </>
    );
};

export default Multiple;
