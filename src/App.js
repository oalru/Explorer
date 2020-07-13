import React from 'react';
import Errors from './Pages/Errors';
import Home from './Pages/Home';
import News from './Pages/News';
import Sport from './Pages/Sport';
import Finance from './Pages/Finance';
import Currency from './Pages/Currency';
import Weather from './Pages/Weather';
import About from './Pages/About';
import Favorite from './Pages/Favorite';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {BrowserRouter as HashRouter, Route, Switch} from 'react-router-dom'

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
    <Navbar bg="dark" variant="dark" className='navbar'>
  <Navbar.Brand >Explorer</Navbar.Brand>
  <Nav className="mr-auto">
    <Nav.Link href="/">Home</Nav.Link>
    <Nav.Link href="/News">News</Nav.Link>
    <Nav.Link href="/Finance">Finance</Nav.Link>
    <Nav.Link href="/Sport">Sport</Nav.Link>
    <Nav.Link href="/Converter">Converter</Nav.Link>
    <Nav.Link href="/Favorite">Favorite</Nav.Link>
    <Nav.Link href="/About">About</Nav.Link>
  </Nav>
    <Weather />
    </Navbar>
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
  
</HashRouter>
);
}
}

export default App;