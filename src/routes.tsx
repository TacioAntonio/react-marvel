import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { SplashScreen } from './pages/SplashScreen';
import { Home } from './pages/Homepage';
import { Error404 } from './pages/Error404';

export default function Routes() {
  return (
    <>
      <Router>
          <Switch>
            <Route path="/" exact component={SplashScreen} />
            <Route path="/home" component={Home} />
            <Route path="*" component={Error404}/>
          </Switch>
      </Router>
    </>
  )
}
