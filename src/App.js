import React from 'react';
import './App.css';
import Errors from './Pages/Errors';
import Home from './Pages/Home';
import News from './Pages/News';
import Sport from './Pages/Sport';
import Finance from './Pages/Finance';
import Currency from './Pages/Currency';
import Weather from './Pages/Weather';
import About from './Pages/About';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className='App'>
    <Weather />
      <nav>
        <Link to='/'>Home Page</Link>{' | '}
        <Link to='/News'>News Page</Link>{' | '}
        <Link to='/Finance'>Finance Page</Link>{' | '}
        <Link to='/Sport'>Sport Page</Link>{' | '}
        <Link to='/About'>About Page</Link>{' | '}
      </nav>
      <div>
        <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/News' component={News} />
        <Route path='/About' component={About} />
        <Route path='/Finance' component={Finance} />
        <Route path='/Sport' component={Sport} />
        <Route component={Errors} />
        </Switch>
      </div>
    </div>
  </Router>
  );
}

export default App;
