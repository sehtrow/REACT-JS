import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import DinamicButton from "./../Common/DinamicButton";

const Character = ({ name, nickname, birthday, img, status, occupation, portrayed }) => (
    <Grid item xs={12} sm={2}>
        <Paper className="defaultPaper">
            <h3>{name}</h3>
            <ul>
                <li>
                    <img className="image_character" alt="imageCharacter" src={img} />
                </li>
                <li>
                    <strong>Birthday: </strong>
                    <span>{birthday}</span>
                </li>
                <li>
                    <strong>NickName: </strong>
                    <span>{nickname}</span>
                </li>
                <li>
                    <strong>Status: </strong>
                    <span>{status}</span>
                </li>
                <li>
                    <strong>Occupation: </strong>
                    <span>{occupation}</span>
                </li>
                <li>
                    <strong>Portrayed: </strong>
                    <span>{portrayed}</span>
                </li>

                {status !== 'Alive' && status !== 'Unknown' ?
                    (
                        <li>
                            <DinamicButton type="character" to={`/death/character/${name}`} />
                        </li>
                    )
                    :
                    ''}


            </ul>
        </Paper>
    </Grid>
);

export default Character;