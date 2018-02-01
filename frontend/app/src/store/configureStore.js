import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import rootReducer from '../reducers';
//USE THUNK FOR ASYNC REQUESTS in a react redux env
import thunk from 'redux-thunk';

export const history = createHistory();


export const store = createStore(
  connectRouter(history)(rootReducer), //new root reducer with router state.
  compose(
    applyMiddleware(
      routerMiddleware(history),
      thunk
    )
  )
)