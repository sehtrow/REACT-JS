
import React, { Fragment, useContext } from "react";
import { DeathsContext } from "./../../contexts/DeathsContext";
import Loading from "./../Common/Loading";
import Message from "./../Common/Message";
import DinamicButton from "./../Common/DinamicButton";
import Details from "./Details";

const Deaths = () => {
    const { doneFetchDeath, death } = useContext(DeathsContext);
    return (
        <Fragment justify="center">
            {doneFetchDeath ? (
                !Array.isArray(death) ? (
                    <Details death={death} />
                ) : (
                    <Message text="No Results" />
                )
            ) : (
                <Loading />
            )}
            <DinamicButton type="back" to="/" />
        </Fragment>
    );
};

export default Deaths;