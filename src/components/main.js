import React from 'react';
import { Switch, Route } from "react-router-dom"
import LandingPage from "./landingPage"
import AboutMe from "./aboutMe"
import Resume from "./resume"
import Projects from "./projects"

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/aboutMe" component={AboutMe} />
    <Route exact path="/resume" component={Resume} />
    <Route exact path="/projects" component={Projects} />
  </Switch>
)

export default Main;