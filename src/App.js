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

  cleaAllClick = () => {
    this.setState({
      mylist: []
    })
  }

  render(){
  return (
    <HashRouter basename="/">
    <div className='App'>
      <header>
        <h1>-- Explorer --</h1>
      
      <Weather />
      
      </header>
    <Nav className="navbar navbar-inverse">
        <Link to='/'>Home Page</Link>
        <Link to='/News'>News Page</Link>
        <Link to='/Finance'>Finance Page</Link>
        <Link to='/Sport'>Sport Page</Link>
        <Link to='/About'>About Page</Link>
        <Link to='/Favorite'>Favorite Page</Link>
      </Nav>
      <div>
        <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/News' component={()=> <News addToFavorate={this.addToFavorate} />} />
        <Route path='/About' component={About} />
        <Route path='/Finance' component={Finance} />
        <Route path='/Sport' component={Sport} />
        <Route path='/Favorite' component={()=>  <Favorite clearAll={this.cleaAllClick} removeOne={this.removeOne} mylist={this.state.mylist} />} />
        <Route component={Errors} />
        </Switch>
      <Currency />
      </div>
    </div>
  </HashRouter>
  );
  }
}

export default App;