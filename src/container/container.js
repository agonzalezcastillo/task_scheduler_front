import React from 'react';
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link as RouterLink } from "react-router-dom";
import Login from '../login/login';
import Appbar  from "../appbar/appbar";
import Dashboard from "../components/dashboard/dashboard";

const Container = ()=> {
    return(
        <React.Fragment>
            <Appbar></Appbar>
            <Login></Login>
            {/*<Dashboard></Dashboard>*/}
        </React.Fragment>
    )
}

export default Container;