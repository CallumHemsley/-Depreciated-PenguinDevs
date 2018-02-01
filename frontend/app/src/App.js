import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';
import Root from './components/Root';
const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <Route path="/" component={Root}/>
    </ConnectedRouter>
  )
}

App.propTypes = {
  history: PropTypes.object,
}

export default App