import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense } from 'react';

import Navbar from "./components/Navbar/navbar";
import 'semantic-ui-css/semantic.min.css'

import Home from "./routes/home";
import About from "./routes/about";


const App = () => (
  <Router>
    <Navbar/>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </Switch>
    </Suspense>
  </Router>
);

export default App;