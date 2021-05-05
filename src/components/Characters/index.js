import React, { Fragment, useContext } from "react";
import { CharactersContext } from "./../../contexts/CharactersContext";
import SearchCharacters from "./SearchCharacters";
import Characters from "./Characters";
import Loading from "./../Common/Loading";
import Message from "./../Common/Message";

const BBCharacters = () => {
    const { validateQName, doneFetch, characters, text } = useContext(CharactersContext);
    return (
        <Fragment>
            <SearchCharacters validateQName={validateQName} />
            {doneFetch ? (
                characters.length ? (
                    <Characters text={text} characters={characters} />
                ) : (
                    <Message text={text} />
                )
            ) : (
                <Loading />
            )}
        </Fragment>
    );
};

export default BBCharacters;