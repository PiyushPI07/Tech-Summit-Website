import React, {Component} from 'react';
import {Route, BrowserRouter, Switch, Redirect} from 'react-router-dom'
import './App.css';
import Footer from './components/views/Footer';
import Header from './components/views/Header';
import Home from './components/views/Home';
import Conference from './components/views/Conference'
import About from './components/views/About'
import Sessions from './components/views/Sessions'

class App extends Component {
  render(){
    return(
      <BrowserRouter>
          <Header/>
          <Switch>
            <Route exact path="/" >
              <Home/>
            </Route>

			<Route path="/conference">
				<Conference/>
			</Route>

			<Route path="/about">
				<About/>
			</Route>

			<Route path="/sessions">
				<Sessions/>
			</Route>
            <Redirect exact to="/"/>
          </Switch>
          <Footer/>
      </BrowserRouter>
    )
  }
}

export default App;
