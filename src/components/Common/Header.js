import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import logo from "./../../assets/images/logo.png";

const Header = () => (
    <AppBar position="sticky">
        <Toolbar>
            <img src={logo} alt="logoBB" height="32"></img>
        </Toolbar>
    </AppBar>
);

export default Header;