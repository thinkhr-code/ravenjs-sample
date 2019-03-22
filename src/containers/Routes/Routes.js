import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../Home';
import ListView from '../ListView';

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/list-view" component={ListView} />
        </Switch>
    );
}

export default Routes;
