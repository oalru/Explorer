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
import Favorite from './Pages/Favorite';
import {Nav} from 'react-bootstrap';
import {BrowserRouter as HashRouter, Route, Link, Switch} from 'react-router-dom'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      mylist: []
    }
  }

  addToFavorate = (artc) => {
    this.setState({
      mylist: [...this.state.mylist, artc]
    })
  }

  removeOne = (rt)=> {
    const newList = [...this.state.mylist]
    const index = newList.indexOf(rt)
    newList.splice(index, 1);
    this.setState({
      mylist: newList
    })
  }

  cleaAllClick = (require) => {
    console.log(require)
    this.setState({
      mylist: []
    });
  }

  render(){
  return (
    <HashRouter basename="/">
    <div className='App home'>
      <header>
        <div>
        <h1>-- Explorer --</h1>
      <div className='weather'>
      <Weather />
      </div>
      </div>
      </header>
    <Nav bg="light" variant="light" className="navbar navbar-inverse">
        <Link to='/'>Home </Link>
        <Link to='/News'>General News</Link>
        <Link to='/Finance'>Economy News</Link>
        <Link to='/Sport'>Premier League</Link>
        <Link to='/Converter'>Currency Converter</Link>
        <Link to='/Favorite'>Favorite Articles</Link>
        <Link to='/About'>About Us</Link>
      </Nav>
      <div>
        <Switch>
        <Route className='link' exact path='/' component={Home} />
        <Route className='link' path='/News' component={()=> <News addToFavorate={this.addToFavorate} />} />
        <Route className='link' path='/Finance' component={Finance} />
        <Route className='link' path='/Sport' component={Sport} />
        <Route className='link' path='/Converter' component={Currency} />
        <Route className='link' path='/Favorite' component={()=>  <Favorite clearAll={this.cleaAllClick} removeOne={this.removeOne} mylist={this.state.mylist} />} />
        <Route className='link' path='/About' component={About} />
        <Route className='link' component={Errors} />
        </Switch>
      </div>
    </div>
  </HashRouter>
  );
  }
}

export default App;