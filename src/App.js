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
import { Container } from 'react-bootstrap';

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

clearAllClick = (require) => {
  this.setState({
    mylist: []
  });
}

render(){
return (
  <HashRouter>
    <Navbar className='navbar navbar-expand-md navbar-dark bg-dark' >
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
    <br/>
    <Container className="text-center" >
      <Switch>
      <Route exact path='/' component={Home} />
      <Route  path='/News' component={()=> <News addToFavorate={this.addToFavorate} />} />
      <Route  path='/Finance' component={Finance} />
      <Route  path='/Sport' component={Sport} />
      <Route  path='/Converter' component={Currency} />
      <Route  path='/Favorite' component={()=>  <Favorite clearAll={this.clearAllClick} removeOne={this.removeOne} mylist={this.state.mylist} />} />
      <Route  path='/About' component={About} />
      <Route component={Errors} />
      </Switch>
</Container>
  
</HashRouter>
);
}
}

export default App;