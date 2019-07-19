import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { Auth0Provider } from "./utils/auth-wrapper";
import config from "./auth_config.json";
import { history, store } from './store/configureStore';
import { BrowserRouter } from 'react-router-dom';
//Stlying for later.
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap-theme.css';
import * as postActions from './actions/postActions';
//Start the app with some state
//Dispatch the fetch post actions immediately to do this.
store.dispatch(postActions.fetchPosts());


const onRedirectCallback = appState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};
//App container is basically a wrapper that enables us to do hot reloading of react components.
ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}>
    <Provider store={store}>
      <BrowserRouter>
        <App history={history}>
        </App> 
      </BrowserRouter>
    </Provider>
  </Auth0Provider>,
  document.getElementById('root')
);

