import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { SplashScreen } from './pages/SplashScreen';

export default function Routes() {
  return (
    <>
      <Router>
          <Switch>
            <Route path="/" exact component={SplashScreen} />
          </Switch>
      </Router>
    </>
  )
}
