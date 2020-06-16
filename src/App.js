import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SignIn from './Login'
import Dashboard from './Dashboard'
import Register from './Register'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          
          <Switch>
            <Route exact path='/' component={SignIn} />
            <Route path='/register' component={Register} />
            <Route path='/dashboard' component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
