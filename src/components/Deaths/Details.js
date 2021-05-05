import React from "react";
import Paper from "@material-ui/core/Paper";

const Details = ({ death }) => {
    const { cause, responsible, last_words, season, episode, death: name_character } = death;
    return (
        <Paper className="paper defaultPaper">
            <strong className="title">{name_character}</strong>
            <br />
            <br />
            <br />
            <ul>
                <li>
                    <strong>Cause</strong>
                    <p>{cause}</p>
                </li>
                <li>
                    <strong>Responsible</strong>
                    <p>{responsible}</p>
                </li>
                <li>
                    <strong>Last Words</strong>
                    <p>{last_words}</p>
                </li>
                <li>
                    <strong>Season</strong>
                    <p>{season}</p>
                </li>
                <li>
                    <strong>Episode</strong>
                    <p>{episode}</p>
                </li>
            </ul>
        </Paper>
    );
};

export default Details;