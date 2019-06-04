import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Pages from '../Pages';
import Navigation from '../Navigation';
import ROUTES from './routes';

// import styles from 'styles.module.css';

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Switch>
        <Route path={ROUTES.HOME} component={Pages.Home}/>
        <Route render={() => <Redirect to={ROUTES.HOME} />} />
      </Switch>
    </div>
  </Router>
);

export default App;
