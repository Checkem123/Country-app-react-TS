import { MdOutlineSearch } from "react-icons/md";
import "../../../App.css";
import "./searchbar.css";
import { useContext, useState } from "react";
import { CountriesContext } from "../../../App";
import { CountriesProps } from "../../../types";

const Searchbar = () => {
    const { setCountries, originalCountries } = useContext(CountriesContext);
    const [name, setName] = useState<string>("");
    const [region, setRegion] = useState<string>("");

    if (!originalCountries) {
        return;
    }

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value.trim().toLowerCase();
        setName(input);

        const filteredCountries: CountriesProps[] = originalCountries.filter(
            (el) => el.name.toLowerCase().startsWith(input)
        );
        setCountries(input ? filteredCountries : originalCountries);
    };

    const handleChangeRegion = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const input = e.target.value.trim().toLowerCase();
        setRegion(input);

        const filteredCountries: CountriesProps[] = originalCountries.filter(
            (el) => el.region.toLowerCase() === input
        );
        setCountries(input ? filteredCountries : originalCountries);
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
