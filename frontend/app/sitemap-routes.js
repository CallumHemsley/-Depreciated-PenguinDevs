import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

const routes = (
    <div>
        <Switch>
            <Route exact path="/"/>
            <Route path="/contact"/>
            <Route path="/posts"/>
            <Route path="/login"/>
            <Route path='/postcategory/:category'/>
        </Switch>
    </div>
);

export default routes;