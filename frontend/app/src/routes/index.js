import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../components/common/HomePage';
import Post from '../components/post/Post';
import GateWrite from '../components/post/GateWrite';
import GateEdit from '../components/post/GateEdit';
import CallBack from '../components/common/CallBack';
import Login from '../components/common/Login';
import Category from '../components/post/Category';
import Contact from '../components/common/Contact';

const routes = (
    <div>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/contact" component={Contact} />
            <Route path="/posts" component={Post} />
            <Route path="/login" component={Login} />
            <Route path='/postcategory/:category' component={Category}/>
            <Route path="/writepost" component={GateWrite}/>
            <Route path="/editpost/:number" component={GateEdit}/>
        </Switch>
    </div>
);

export default routes;