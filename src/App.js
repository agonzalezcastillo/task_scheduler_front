import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Container from "./container/container";

// MSAL imports
import {MsalProvider} from "@azure/msal-react";
import Dashboard from "./components/dashboard/dashboard";

const App = ({pca}) => {
    return (
        <Router>
            <MsalProvider instance={pca}>
                <Pages/>
            </MsalProvider>
        </Router>
    );
}

const Pages = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Container/>
            </Route>
            <Route path="/dashboard">
                <Dashboard/>
            </Route>
        </Switch>
    )
}


export default App;
