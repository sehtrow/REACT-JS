import React, { createContext, useState, useEffect } from 'react';
import { chartCharactersGet, characterSearch } from '../constants';

export const CharactersContext = createContext();

const CharactersContextProvider = ({ children }) => {
    const [doneFetch, setDoneFetch] = useState();
    const [currentQCharacter, setCurrentQCharacter] = useState('');
    const [text, setText] = useState('50 Characters Breaking Bad');
    const [characters, setCharacters] = useState([]);

    useEffect(() => getFirst50Characters(), []);

    const getFirst50Characters = () => {
        fetch(chartCharactersGet())
            .then(res => res.json())
            .then(data => {
                setDoneFetch(true);
                setCharacters(data);
            })
            .catch(err => console.log(err));

    };

    const getCharacters = name => {
        fetch(characterSearch(name))
            .then(res => res.json())
            .then(data => {
                setDoneFetch(true);
                setText(data.length ? 'Results' : 'No Results');
                setCharacters(data);
            })
            .catch(err => console.log(err));
    };

    const validateQName = (e, name = document.querySelector('#name_search').value.toLowerCase().trim()) => {
        debugger;
        if (e.type === "keypress" && e.key !== "Enter") return;
        const words = name.match(/\w+/g);
        name = words && words.join(" ");
        if (name && name !== currentQCharacter) {
            setCurrentQCharacter(name);
            setDoneFetch(false);
            getCharacters(name);
        } else if (name === null) {
            getFirst50Characters();
            setText('50 Characters Breaking Bad');
        }
    };

    return (
        <CharactersContext.Provider value={{ doneFetch, text, characters, validateQName }}>
            {children}
        </CharactersContext.Provider>
    )

}

export default CharactersContextProvider;