import React from  'react';
import Posts from './Posts';
import PostDetailsPage from './PostDetailsPage';
import { Route, Switch } from 'react-router-dom';
import Category from './Category';


const Post = () => (
  <Switch>
    <Route exact path='/posts' component={Posts}/>
    <Route path='/posts/:number' component={PostDetailsPage}/>
  </Switch>
)

export default Post;