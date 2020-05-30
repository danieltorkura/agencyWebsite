import React from 'react';
import PageWrapper from './components/PageWrapper';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Pages
import Home from './components/Pages/Home';
import About from './components/Pages/About'
import Contact from './components/Pages/Contact';

function App() {
  return (
    <div>
      <Router>
        <PageWrapper>

          <Route
          exact={true} 
          path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

        </PageWrapper>
      </Router>
    </div>
  );
}

export default App;
