import React, { Component } from 'react'
import {Layout, Header, Navigation, Content, Drawer} from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './components/main';
import './App.css'

export class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
      <Layout>
          <Header className="header" title="Angel's Portfolio" scroll>
              <Navigation>
                  <Link to="/">Home</Link>
                  <Link to="/resume">Resume</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/aboutMe">About Me</Link>
                  <Link to="/contact">Contact</Link>
              </Navigation>
          </Header>
          <Drawer 
            title="Angel's Portfolio"
            style={{
              background:"black", 
              color:"white",
              outline: "none"
            }}>
              <Navigation style={{color:"white"}}>
                <Link to="/">Home</Link>
                <Link to="/aboutMe">About Me</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              <Main />
          </Content>
      </Layout>
  </div>
    )
  }
}

export default App

