import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Pages from '../Pages';
import Navigation from '../Navigation';

// import styles from 'styles.module.css';

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Switch>
        <Route component={Pages.NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
