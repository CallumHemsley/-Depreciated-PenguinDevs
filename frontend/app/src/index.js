import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { history, store } from './store/configureStore';
//Stlying for later.
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap-theme.css';
import * as postActions from './actions/postActions';
//Start the app with some state
//Dispatch the fetch post actions immediately to do this.
store.dispatch(postActions.fetchPosts());
//test commit
//App container is basically a wrapper that enables us to do hot reloading of react components.
ReactDOM.render(
  <Provider store={store}>
    <App history={history}>
    </App> 
  </Provider>,
  document.getElementById('root')
);

