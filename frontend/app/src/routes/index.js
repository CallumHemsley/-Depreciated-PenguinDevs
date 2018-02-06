import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthService from '../utils/AuthService';
import Home from '../components/common/HomePage';
import Post from '../components/post/Post';
import WritePost from '../components/post/WritePost';
import CallBack from '../components/common/CallBack';

const auth = new AuthService();

//When user authenticated, their url contains a hash with auth info.
//This processes the hash.
const handleAuthentication = (nextState, replace) => {
    if(/access_token|id_token|error/.test(nextState.location.hash)) {
        auth.handleAuthentication();
    }
}

const routes = (
    <div>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/posts" component={Post} />
            <Route path="/writepost" component={WritePost} />
            <Route path="/callback" render={(props) => {
                handleAuthentication(props);
                return <CallBack {...props} />
            }}/>
        </Switch>
    </div>
);

export default routes;