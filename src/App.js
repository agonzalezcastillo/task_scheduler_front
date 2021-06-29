import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Container from "./container/container";

// MSAL imports
import Dashboard from "./components/dashboard/dashboard";

const App = ({pca}) => {
    return (
        <Router>
            <Pages/>
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
