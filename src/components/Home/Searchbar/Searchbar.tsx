import { MdOutlineSearch } from "react-icons/md";
import "../../../App.css";
import "./searchbar.css";
import { useContext, useState, useEffect } from "react";
import { CountriesContext } from "../../../App";

const Searchbar = () => {
    const { setCountries, originalCountries } = useContext(CountriesContext);
    const [name, setName] = useState<string>("");
    const [region, setRegion] = useState<string>("");

    // Update filtered countries whenever originalCountries changes
    useEffect(() => {
        if (!originalCountries) return;

        let filteredCountries = originalCountries;

        if (name) {
            filteredCountries = filteredCountries.filter((el) =>
                el.name.toLowerCase().startsWith(name.toLowerCase())
            );
        }

        if (region) {
            filteredCountries = filteredCountries.filter(
                (el) => el.region.toLowerCase() === region.toLowerCase()
            );
        }

        setCountries(filteredCountries);
    }, [name, region, originalCountries, setCountries]);

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value.trim().toLowerCase();
        setName(input);
    };

    const handleChangeRegion = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const input = e.target.value.trim().toLowerCase();
        setRegion(input);
    };

    return (
        <div className="searchbar">
            <div className="input-group">
                <div className="icon">
                    <MdOutlineSearch style={{ fontSize: "24px" }} />
                </div>
                <input
                    className="search-btn"
                    type="text"
                    placeholder="Search for a country..."
                    value={name}
                    onChange={handleChangeName}
                />
            </div>

            <select
                className="countries"
                defaultValue={region}
                onChange={handleChangeRegion}
            >
                <option value="" disabled hidden>
                    Filter by Region
                </option>
                <option value="africa">Africa</option>
                <option value="americas">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
        </div>
    );
};

export default Searchbar;
