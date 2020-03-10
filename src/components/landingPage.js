import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Grid, Cell, Card, CardTitle, CardActions,CardText, Button  } from "react-mdl";
import circleCropped from '../Images/circleCropped.png'
import "../App.css"
import Projects from "./projects";
import AboutMe from "./aboutMe";
import Resume from "./resume";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="container">
        <Grid className="landing-grid" style={{width: "auto"}}>
          <Cell 
            col={12}
            style={{
              justifyContent:"center",
              margin: "0"
            }}>
            <img
              src={circleCropped}
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1 className="role-title">Full Stack Web Developer </h1>
              <hr />
              <p className="summary">
                {" "}
                Highly motivated Full-Stack Web Developer with a passion for UI and UX. I pride myself on my work ethic and willingness to do whatever is necessary to accomplish a goal I’ve set for myself. One of the most beautiful things about life is that every day is an opportunity to learn and take steps towards achieving your life long goals!{" "}
              </p>
              <p>
                {" "}
                React | Vanilla JavaScript | HTML/CSS | NodeJs | Express |
                jQuery | JSON | postgreSQL {" "}
              </p>

              <div className="social-links">
                <a
                  href="https://github.com/aliceaa396"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true"></i>
                </a>

                <a
                  href="https://www.linkedin.com/in/angel-alicea-iii/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>

                <a href="mailto: ala31996@gmail.com">
                  <i className="fa fa-envelope-square" />
                </a>

              </div>
            </div>
          </Cell>
        </Grid>
        <h2 className="landingPageTitle"> Projects </h2>
        <Projects />
        <div>
          <h2 className="landingPageTitle"> About Me </h2>
          <hr className= "aboutMeHr" align="center" style={{borderTop: '1px solid white', margin: "auto"}} />
            <AboutMe />
        </div>
        
      </div>
    );
  }
}
