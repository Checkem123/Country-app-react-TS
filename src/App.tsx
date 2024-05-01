import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.tsx";
import UniqueCountry from "./components/UniqueCountry/UniqueCountry.tsx";
import NotFound from "./components/NotFound/NotFound.tsx";
import Header from "./components/Header/Header.tsx";
import { useState, useEffect, createContext, Dispatch } from "react";
import { CountriesProps } from "./types.ts";

export const CountriesContext = createContext<{
    countries: CountriesProps[] | null;
    setCountries: Dispatch<CountriesProps[]>;
    originalCountries: CountriesProps[] | null;
}>({
    countries: null,
    setCountries: () => {},
    originalCountries: null,
});

export const DarkmodeContext = createContext<{
    darkmode: boolean;
    setDarkmode: Dispatch<React.SetStateAction<boolean>>;
}>({
    darkmode: true,
    setDarkmode: () => {},
});

function App() {
    const [countries, setCountries] = useState<CountriesProps[] | null>(null);
    const [originalCountries, setOriginalCountries] = useState<
        CountriesProps[] | null
    >(null);

    console.log(countries);

    const [darkmode, setDarkmode] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("../../../../data.json");
            // fetch this for netlify
            // const res = await fetch("../data.json");
            const data: CountriesProps[] = await res.json();
            setCountries(data);
            setOriginalCountries(data);
        };
        fetchData();
    }, []);

    return (
        <div className={`app ${darkmode ? "" : "darkmode"}`}>
            <DarkmodeContext.Provider
                value={{
                    darkmode,
                    setDarkmode,
                }}
            >
                <Header />
            </DarkmodeContext.Provider>
            <Routes>
                <Route
                    path="/"
                    element={
                        <CountriesContext.Provider
                            value={{
                                countries,
                                setCountries,
                                originalCountries,
                            }}
                        >
                            <Home />
                        </CountriesContext.Provider>
                    }
                />
                <Route
                    path="/country/:name"
                    element={<UniqueCountry countries={originalCountries} />}
                />
                <Route path="/*" element={<NotFound />} />
                <Route path="/country/*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
