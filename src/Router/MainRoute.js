////////////////////////////////////////////////////////////////////////////////////////////////////
// imports

import React from "react";
import {Provider} from "react-redux";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {configureStore} from "../Redux/Store";
import App from "./AppRoute";

////////////////////////////////////////////////////////////////////////////////////////////////////
// component

const MainRoute = () => (
    <Provider store={configureStore()}>
        <Router>
            <Switch>
                <Route path="/" component={App} />
            </Switch>
        </Router>
    </Provider>
);

export default MainRoute;


