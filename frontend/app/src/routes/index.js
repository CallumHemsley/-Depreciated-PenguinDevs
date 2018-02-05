import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/common/HomePage';
import Post from '../components/post/Post';
import WritePost from '../components/post/WritePost';


const routes = (
    <div>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/posts" component={Post} />
            <Route path="/writepost" component={WritePost} />
        </Switch>
    </div>
);

export default routes;