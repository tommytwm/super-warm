import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense } from 'react';

import SelectBar from "./components/Selectbar/selectBar";
import 'semantic-ui-css/semantic.min.css'

import Home from "./routes/home";
import Forum from "./routes/forum";


const App = () => (
  <Router>
    <SelectBar/>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/forum" component={Forum}/>
      </Switch>
    </Suspense>
  </Router>
);

export default App;