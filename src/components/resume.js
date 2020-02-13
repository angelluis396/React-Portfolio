import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';

export default class Resume extends Component {
  render() {
    return (
      <div className="resume-container">
        <Grid> 
          <Cell col={4}>
            <div style={{textAlign : 'center'}}>
              <img 
                src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
                alt="avatar"
                style={{height: "200px"}}
              />  
            </div>
            <h2> Angel L. Alicea</h2>
            <h4 style={{color: 'white'}}> Full-Stack Web Developer </h4>
            <hr style={{borderTop: '3px solid white'}} />
            <p className="prof-summary"> 
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            

            <hr style={{borderTop: '3px solid white'}} />
            <div className="contact-info">
              <h5> City</h5>
                <p className="user-info"> Lawrenceville, New Jersey </p>
              <h5> Email </h5>
                <p className="user-info"> ala31996@gmail.com </p>
                <a href="https://docs.google.com/document/d/17F-g3AdyceOmDp5YTiVo0L0lCvoPHyLNX5JCXZbVyX0/edit?usp=sharing"><h5> Link to Professional Resume </h5></a>
            </div>  
          </Cell>
          <Cell 
            className="resume-right-col" 
            col={8} 
            style={{
              background: "#9d50bb",
              background: "background: -webkit-linear-gradient(to right, #9d50bb, #6e48aa)",
              background: "linear-gradient(to right, #9d50bb, #6e48aa)",
              borderRadius: "5px"
            }}>
            <h2 className="education-title"> Education</h2>
            <Education 
                startYear={2019}
                endYear={2020}
                schoolName="THINKFUL"
                degreeDesc="Engineering Immersion"
                schoolDescription={<ul>
                  <li> 
                    Created and deployed mobile-first applications while learning new languages and frameworks by collaborating several hours every week with a senior web developer.
                  </li> 
                  <li> 
                    Learned industry best practices and practical software development standards with a focus on HTML5, CSS3, JavaScript, jQuery, Node.js, React, Redux, and algorithms & data structures.
                  </li>
                </ul>}
                
              />
              <Education 
                startYear={2014}
                endYear={2018}
                schoolName="Rider University"
                degreeDesc="Bachelor's Degree in Criminal Justice with a concentration in Law."
                schoolDescription={<ul>
                  <li> 
                    Member of Tau Kappa Epsilon
                  </li> 
                  <li>
                    Served as Risk Manager on the Executive board.
                  </li>
                </ul>}
              />
            <hr style={{borderTop: '3px solid white'}}/>
              <h2> Technical Skills </h2>
                  <ul className="tech-skills-ul"> 
                    <h3> Front-End: </h3> 
                      <li className="tech-skils-li"> React </li>
                      <li className="tech-skils-li"> Vanilla JavaScript </li>
                      <li className="tech-skils-li"> HTML & CSS </li>
                      <li className="tech-skils-li"> jQuery </li>
                      <li className="tech-skils-li"> Redux </li>
                  </ul>
                  <ul className="tech-skills-ul">
                    <h3> Back-End: </h3>
                      <li className="tech-skils-li"> Node </li>
                      <li className="tech-skils-li"> Express </li> 
                      <li className="tech-skils-li"> PostgreSQL </li>
                      <li className="tech-skils-li"> JSON </li>
                      <li className="tech-skils-li"> RESTFUL API </li>
                      <li className="tech-skils-li"> Ruby </li>
                  </ul>
                  <ul className="tech-skills-ul"> 
                    <h3> Development Tools & Methods </h3>
                      <li className="tech-skils-li"> - Git </li>
                      <li className="tech-skils-li"> GitHub </li>
                      <li className="tech-skils-li"> Heroku </li>
                      <li className="tech-skils-li"> Zeit </li>
                      <li className="tech-skils-li"> Chrome Dev. Tools </li>
                      <li className="tech-skils-li"> DBeaver </li>
                      <li className="tech-skils-li"> Postman </li>
                      <li className="tech-skils-li"> Mobile Development </li>
                      <li className="tech-skils-li"> Responsive Design </li>
                      <li className="tech-skils-li"> React MDL </li>
                      <li className="tech-skils-li"> WordPress </li>
                  </ul>
            <hr style={{borderTop: '3px solid white'}}/>
            <h2> Experience </h2>
            <Experience 
              startYear={2015}
              endYear={2019}
              jobName="Help Desk Support"
              jobDescription={<ul>
                <li>
                  Developed and maintained the company’s wordpress website. 
                </li>
                <li>
                  Provided assistance to staff members with technological issues.
                </li>
              </ul>}
            />
          </Cell>
        </Grid>
      </div>
    )
  }
}

