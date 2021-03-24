import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Windex from './Windex'
import { createBrowserHistory } from 'history';
import Wmobile from './Wmobile'
import Wquotes from './Wquotes';
import Wseo from './Wseo';
import Wui_ux from './Wui_ux';
import Web_design from './Web_design';
import Howwedoit from './Howwedoit';
import Datacentre from './Datacentre';
import Development from './Development';


const history = createBrowserHistory();


class App extends Component {
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






        <Router>
          <Switch>
            <Route exact path="/" name="Windex Page" render={props => <Windex {...props} />} />
              <Route exact path="/Wmobile" name="Wmobile" render={props => <Wmobile {...props} />} />
              <Route exact path="/Wquotes" name="Wmobile" render={props => <Wquotes {...props} />} />
              <Route exact path="/Web_design" name="Web_design " render={props => <Web_design {...props} />} />
              <Route exact path="/Wui_ux" name="Wui_ux " render={props => <Wui_ux {...props} />} />
              <Route exact path="/Wseo" name="Wseo " render={props => <Wseo {...props} />} />
              <Route exact path="/Datacentre" name="Datacentre " render={props => <Datacentre {...props} />} />
              <Route exact path="/Development" name="Development " render={props => <Development {...props} />} />
          </Switch>
        </Router>
      </div> 
    )
  }

}

export default App;
