import React from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';
import Root from './components/Root';

ReactGA.initialize('UA-123770507-1')

function fireTracking() {
  ReactGA.pageview(window.location.hash);
}
const App = ({ history }) => {
  return (
    <ConnectedRouter onUpdate={fireTracking} history={history}>
      <Route path="/" component={Root}/>
    </ConnectedRouter>
  )
}

App.propTypes = {
  history: PropTypes.object,
}

export default App