import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute  } from 'react-router'

import About from './pages/About';
import Articles from './pages/Articles'
import Contact from './pages/Contact';
import Featured from './pages/Featured';
import Home from './pages/Home';
import Layout from './component/Layout.js'


import './vendor/css/bootstrap.min.css';
import './vendor/css/bootstrap-theme.min.css';
import './vendor/css/theme.css';
import './App.css';

ReactDOM.render((
   <Router history = {hashHistory}>
      <Route path = "/" component = {Layout}>
         <IndexRoute component = {Home} />
         <Route path = "home" component = {Home} />
         <Route path = "about" component = {About} />
         <Route path = "articles(/:article)" component = {Articles} />
         <Route path = "featured" component = {Featured} />
         <Route path = "contact" component = {Contact} />
      </Route>
   </Router>
), document.getElementById('root'))

