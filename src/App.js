import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './components/StrictAccess';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route path='/users/:id' render={(props) => <Users {...props} greetingsMessage="Good Morning"/> } />
            <Route path='/StrictAccess' render={(props) => <StrictAccess {...props} user={{username: 'joao', password: '1234'}} /> } />
            <Route path='/about'><About /></Route>
            <Route path='/'><Home /></Route>
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
