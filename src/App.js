import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Windex from './components/Windex'
import { createBrowserHistory } from 'history';
import Wmobile from './components/Wmobile'
import Wquotes from './components/Wquotes';
import Wseo from './components/Wseo';
import Wui_ux from './components/Wui_ux';
import Web_design from './components/Web_design';
import Howwedoit from './components/Howwedoit';
import Datacentre from './components/Datacentre';
import Development from './components/Development';
import AOS from 'aos';
const history = createBrowserHistory();


class App extends Component {
  componentDidMount(){

    AOS.init({
      
      duration : 2000
    });
  }
  render() {
    return (
      <div>

      {/* <Development/> */}
      {/* <Datacentre/> */}
      {/* <Howwedoit/> */}
      {/* <Windex/> */}
      {/* <Wmobile/> */}
      {/* <Wquotes/> */}
     {/* <Wseo/> */}
     {/* <Wui_ux/> */}
     {/* <Web_design/> */}

        <Router history={history}>
          <Switch>
              <Route exact path="/" name="Windex Page" render={props => <Windex {...props} />} />
              <Route exact path="/Wmobile" name="Wmobile" render={props => <Wmobile {...props} />} />
              <Route exact path="/Wquotes" name="Wmobile" render={props => <Wquotes {...props} />} />
              <Route exact path="/Web_design" name="Web_design " render={props => <Web_design {...props} />} />
              <Route exact path="/Wui_ux" name="Wui_ux " render={props => <Wui_ux {...props} />} />
              <Route exact path="/Wseo" name="Wseo " render={props => <Wseo {...props} />} />
              <Route exact path="/Datacentre" name="Datacentre " render={props => <Datacentre {...props} />} />
              <Route exact path="/Development" name="Development " render={props => <Development {...props} />} />
              <Route exact path="/Howwedoit" name="Howwedoit " render={props => <Howwedoit {...props} />} />
          </Switch>
        </Router>
      </div> 
    )
  }

}

export default App;
