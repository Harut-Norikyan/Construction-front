import React, {Component} from 'react';

import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Elements from "./pages/Elements";
import Project_details from "./pages/Project_details";
import Services from "./pages/Services";
import Services_details from "./pages/Services_details";
import Single_blog from "./pages/Single_blog";

class App extends Component {
  static propTypes = {};

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route path="/projects" exact component={Projects}/>
          <Route path="/blog" exact component={Blog}/>
          <Route path="/contact" exact component={Contact}/>
          <Route path="/elements" exact component={Elements}/>
          <Route path="/project_details/:id" exact component={Project_details}/>
          <Route path="/project_details" exact component={Project_details}/>
          <Route path="/services" exact component={Services}/>
          <Route path="/services_details" exact component={Services_details}/>
          <Route path="/single_blog" exact component={Single_blog}/>
        </Switch>
      </BrowserRouter>


    )
  }
}

export default App;
