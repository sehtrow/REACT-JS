import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const SearchCharacters = ({ validateQName }) => (
    <Paper className="paper defaultPaper">
        <TextField
            id="name_search"
            label="Name of character"
            margin="normal"
            variant="outlined"
            onKeyPress={(e) => validateQName(e)}
        />
        <IconButton onClick={(e) => validateQName(e)}>
            <SearchIcon />
        </IconButton>
    </Paper>
);

export default SearchCharacters;