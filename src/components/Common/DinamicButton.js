import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const DinamicButton = ({ type, to }) => (
    <Link className={`buttonPrimary ${type === 'back' ? 'backBtn' : ''} `} to={to}>
        <Button variant="contained" color="primary">
            {type === "character" ? "CUASE DEATH" : "Go Back"}
        </Button>
    </Link>
);

export default DinamicButton;