import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SignIn from './Login'
import Dashboard from './Dashboard'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          {/* <Header /> */}
          <Switch>
            <Route exact path='/' component={SignIn} />
            <Route path='/dashboard' component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
