import React, { createContext, useState, useEffect } from "react";
import { deathGet } from "./../constants";

export const DeathsContext = createContext();

const DeathsContextProvider = ({ children }) => {
    const name = window.location.pathname.split("/")[3];
    const [doneFetchDeath, setDoneFetchDeath] = useState(false);
    const [death, setDeath] = useState([]);

    useEffect(() => getDeathInfo(name), [name]);

    const getDeathInfo = (name) => {
        fetch(deathGet(name))
            .then((res) => res.json())
            .then((data) => {

                const formatData = data.length ? data[0] : {};
                setDoneFetchDeath(true);
                !Array.isArray(formatData) && setDeath(formatData);
            })
            .catch((err) => console.log(err));
    };


    return (
        <DeathsContext.Provider value={{ doneFetchDeath, death }}>
            {children}
        </DeathsContext.Provider>
    );
};

export default DeathsContextProvider;