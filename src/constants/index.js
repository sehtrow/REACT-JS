const cors_anywhere = 'https://cors-anywhere.herokuapp.com/';
const base_url = 'https://www.breakingbadapi.com/api/';

const chart_characters_get = 'characters?limit=50';
const character_search = 'characters?name=';
const death_get = 'death?name=';


export const characterSearch = name => `${cors_anywhere}${base_url}${character_search}${name}`;
export const chartCharactersGet = () => `${cors_anywhere}${base_url}${chart_characters_get}`;
export const deathGet = name => `${cors_anywhere}${base_url}${death_get}${name}`;

