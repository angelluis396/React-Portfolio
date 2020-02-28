import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Grid, Cell, Card, CardTitle, CardActions,CardText, Button  } from "react-mdl";
import circleCropped from '../Images/circleCropped.png'
import "../App.css"

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
          <div className="projects-container">
            <Cell className="projects-right-col" 
              
              col={12}
              style={{
                justifyContent:"center",
                margin: "0"
              }}>
            <h1 className="recent-projects-title"> Recent Projects </h1>
            <p className="take-a-look"><Link to="/projects"> Link to all Projects</Link></p>
            <div className="card-container">
            <Card
                  className="card"
                  shadow={0}
                  style={{
                  height: "320px", 
                  margin: "auto",
                  marginBottom: "15px",
                  
                }}
                >
                  <CardTitle
                    expand
                    style={{
                      color: "#fff",
                      background:
                        "url(https://i.ibb.co/T1BdnS4/llr.png) center/cover"
                    }}
                  >
                    Fitpad
                  </CardTitle>
                  <CardText style={{padding:"10px"}}>
                    Developed, tested and designed a Full-Stack application to effortlessly keep track of your weight lifting sessions. The technologies used to build this application include React, JSON, Node, PostgreSQL, Express, and CSS.
                  </CardText>
                  <CardActions border>
                    <a href="https://gist.github.com/aliceaa396/8635a80457835309a1827c9fe8e9d46e#file-capstone-i-fitpad" target="_blank"><Button colored > GitHub </Button></a>
                    <a href="https://fitpad.now.sh/" target="_blank"><Button colored > Live Demo </Button></a>
                  </CardActions>
                </Card>
                <Card
                  className="card"
                  shadow={0}
                  style={{
                  height: "320px", 
                  margin: "auto",
                  marginBottom: "15px",
              
                }}
                >
                  <CardTitle
                    expand
                    style={{
                      color: "#fff",
                      background:'url(https://i.ibb.co/7GhKfQ0/ssr.png) center/cover'
                    }}
                  >
                    Spanish Spaced Repetition
                  </CardTitle>
                  <CardText style={{padding:"10px"}}>
                    Designed and developed a Full-Stack application that utilizes spaced repetition to teach users a new language. The technologies used to build this application include React, CSS, Node, as well as PostgreSQL.
                  </CardText>
                  <CardActions border>
                    <a href="https://github.com/thinkful-ei-iguana/Jack-Angel-Capstone-II-Frontend" target="_blank"><Button colored > GitHub </Button></a>
                    <a href="https://spaced-repetition-ten.now.sh/" target="_blank"><Button colored > Live Demo </Button></a>
                  </CardActions>
                </Card>
                <Card
                  className="card"
                  shadow={0}
                  style={{     
                    height: "320px", 
                    margin: "auto", 
                    marginBottom: "15px",
                   
                  }}
                >
                  <CardTitle
                    expand
                    style={{
                      color: "#fff",
                      background:
                        "url(https://i.ibb.co/DWDdv6p/Untitled.png) bottom right 15% no-repeat #46B6AC"
                    }}
                  >
                    Frenmo
                  </CardTitle>
                  <CardText style={{padding:"10px"}}>
                    Coming Soon! Developing a Full-Stack application that allows users to send virtual coupons to friends and family. The technologies used to build this application include React, CSS, Node, as well as PostgreSQL.
                  </CardText>
                  <CardActions border>
                    <a href="https://gist.github.com/aliceaa396/9bc42fbfbb49f381e0314b9e0a8df4fe" target="_blank"><Button colored > GitHub </Button></a>
                    <a href="https://frenmo.now.sh/login" target="_blank"><Button colored > Live Demo </Button></a>
                  </CardActions>
                </Card>
              </div>
            </Cell>
          </div>
        </Grid>
      </div>
    );
  }
}
