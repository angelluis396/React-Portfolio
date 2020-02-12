import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Grid, Cell, Card, CardTitle, CardActions,CardText, Button  } from "react-mdl";
import "../App.css"

export default class LandingPage extends Component {
  render() {
    return (
      <div className="container">
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1 >Full Stack Web Developer </h1>
              <hr />
              <p className="summary">
                {" "}
                Hi I'm Angel Alicea, I'm a Full-Stack Developer with a passion
                for UI and Fitness!{" "}
              </p>
              <p>
                {" "}
                React | Vanilla JavaScript | HTML/CSS | NodeJs | Express |
                jQuery{" "}
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
            <Cell className="projects-right-col" align={"middle"} col={12}>
            <h1> Recent Projects </h1>
            <p className="take-a-look"><Link to="/projects"> Take a look at All my Projects</Link></p>
            <div className="card-container">
                <Card
                  shadow={0}
                  style={{ width: "auto", height: "320px", margin: "auto"}}
                >
                  <CardTitle
                    expand
                    style={{
                      color: "#fff",
                      background:
                        "url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC"
                    }}
                  >
                    Update
                  </CardTitle>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan
                    convallis.
                  </CardText>
                  <CardActions border>
                    <Button colored>View Updates</Button>
                  </CardActions>
                </Card>
                <Card
                  className="card"
                  shadow={0}
                  style={{
                  width: "auto", 
                  height: "320px", 
                  margin: "auto", 
                  marginBottom: "15px",
                  marginRight: "6%",
                  width: "auto",
                  height: "320px"}}
                >
                  <CardTitle
                    expand
                    style={{
                      color: "#fff",
                      background:
                        "url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC"
                    }}
                  >
                    Update
                  </CardTitle>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan
                    convallis.
                  </CardText>
                  <CardActions border>
                    <Button colored>View Updates</Button>
                  </CardActions>
                </Card>
                <Card
                  className="card"
                  shadow={0}
                  style={{ width: "auto", height: "320px", margin: "auto", marginBottom: "15px", marginRight: "6%" }}
                >
                  <CardTitle
                    expand
                    style={{
                      color: "#fff",
                      background:
                        "url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC"
                    }}
                  >
                    Update
                  </CardTitle>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan
                    convallis.
                  </CardText>
                  <CardActions border>
                    <Button colored>View Updates</Button>
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
