import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense } from 'react';

import SelectBar from "./components/Selectbar/selectBar";
import NavBar from "./components/Selectbar/navbar"
import 'semantic-ui-css/semantic.min.css'

import Home from "./routes/home";
import Advice from "./routes/advice";


const App = () => (
  <Router>
    <SelectBar/>
    <NavBar/>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/advice" component={Advice}/>
        {/* <Route path="/consult" component={Consult}/> */}
      </Switch>
    </Suspense>
  </Router>
);

export default App;