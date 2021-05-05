import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Character from "./Character";
import Message from "./../Common/Message";

const Characters = ({ characters, text }) => (
    <Fragment>
        <Message text={text} />
        <div className="root">
            <Grid container spacing={3} justify="center">
                {characters.map((character) => {
                    const {
                        char_id,
                        name,
                        nickname,
                        birthday,
                        img,
                        status,
                        appearance,
                        occupation,
                        portrayed,
                    } = character;
                    return (
                        <Character
                            key={char_id}
                            appearance={appearance}
                            name={name}
                            nickname={nickname}
                            birthday={birthday}
                            img={img}
                            status={status}
                            occupation={occupation}
                            portrayed={portrayed}
                        />
                    );
                })}
            </Grid>
        </div>
    </Fragment>
);

export default Characters;