import React from 'react';

import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import './index.css';

import Layout from './components/Layout.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Hobbies from './components/Hobbies.js';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngular, faNodeJs } from '@fortawesome/free-brands-svg-icons'

library.add(faAngular, faNodeJs)

const routing = (
  <BrowserRouter>
    <div>
        <nav>
          <NavLink className="link" exact activeClassName="active" to="/">Home</NavLink>
        </nav>
        <nav>
          <NavLink className="link" exact activeClassName="active" to="/About">About</NavLink>
        </nav>
        <nav>
          <NavLink className="link" exact activeClassName="active" to="/Projects">Projects</NavLink>
        </nav>
        <nav>
          <NavLink className="link" exact activeClassName="active" to="/Hobbies">Hobbies</NavLink>
        </nav>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Projects" component={Projects} />
          <Route exact path="/Hobbies" component={Hobbies} />
      </Switch>
    </div>
  </BrowserRouter>
)

ReactDOM.render(
  // <BrowserRouter>
  //   <Layout>
  //     <Switch>
  //       <Route path="/About" component={About}/>
  //       <Route path="/Projects" component={Projects}/>
  //       <Route path="/Hobbies" component={Hobbies}/>
  //       <Route path="/" component={Home}/>
  //     </Switch>
  //   </Layout>
  // </BrowserRouter>,
  routing,
  document.getElementById('root'));

