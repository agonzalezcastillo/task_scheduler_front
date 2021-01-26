import React from "react";
import {AppBar, makeStyles, Toolbar} from "@material-ui/core";

const Appbar = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        barra: {
            background: "#FFFFFF",
        },
        logout: {
            color: "#ffffff",
        },
    }));

    const classes = useStyles();

    return(
        <AppBar position="static">
            <Toolbar className={classes.barra}>
                Order Concilliator
            </Toolbar>
        </AppBar>
    )
}

export default Appbar;