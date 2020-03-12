import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import bitCropped from '../Images/bitCropped.png'

export default class Resume extends Component {
  render() {
    return (
      <div className="resume-container">
        <Grid> 
          <Cell col={4}>
            <div style={{textAlign : 'center'}}>
              <img 
                src={bitCropped}
                alt="avatar"
                style={{height: "200px"}}
              />  
            </div>
            <h2> Angel L. Alicea</h2>
            <h4 style={{color: 'white'}}> Full-Stack Web Developer </h4>
            <hr style={{borderTop: '3px solid white'}} />
            <p className="prof-summary"> 
              Highly motivated Full-Stack Web Developer with a passion for UI and UX. I pride myself on my work ethic and willingness to do whatever is necessary to accomplish a goal I’ve set for myself. One of the most beautiful things about life is that every day is an opportunity to learn and take steps towards achieving your life long goals! What I may lack in years of experience, I more than makeup for with undying work ethic and tenacity to do my absolute best.
            </p>
            

            <hr style={{borderTop: '3px solid white'}} />
            <div className="contact-info">
              <u><h5> Location </h5></u>
                <p className="user-info"> Lawrenceville, New Jersey </p>
              <u><h5> Email </h5></u>
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
                schoolDescription={<ul className="school-ul">
                  <li> 
                    Created and deployed mobile-first applications while learning new languages and frameworks by collaborating several hours every week with a senior web developer.
                  </li> 
                  <li> 
                    Learned industry best practices and practical software development standards with a focus on HTML5, CSS3, JavaScript, jQuery, Node.js, React, Redux, as well as algorithms & data structures.
                  </li>
                </ul>}
                
              />
              <Education 
                startYear={2014}
                endYear={2018}
                schoolName="Rider University"
                degreeDesc="Bachelor's Degree in Criminal Justice"
                schoolDescription={<ul className="school-ul">
                  <li> 
                    Member of Tau Kappa Epsilon
                  </li> 
                  <li>
                    Served as Risk Manager on the Executive board.
                  </li>
                </ul>}
              />
            <hr style={{borderTop: '3px solid white'}}/>
              <h2 className="tech-sec-title"> Technical Skills </h2>
                  <ul style={{listStyle: "none"}} className="tech-skills-ul"> 
                  <u><h3 className="tech-title"> Front-End: </h3></u>
                      <li className="tech-skils-li"> React </li>
                      <li className="tech-skils-li"> Vanilla JavaScript </li>
                      <li className="tech-skils-li"> HTML & CSS </li>
                      <li className="tech-skils-li"> jQuery </li>
                      <li className="tech-skils-li"> Redux </li>
                  </ul>
                  <ul style={{listStyle: "none"}} className="tech-skills-ul">
                  <u><h3 className="tech-title"> Back-End: </h3></u>
                      <li className="tech-skils-li"> Node </li>
                      <li className="tech-skils-li"> Express </li> 
                      <li className="tech-skils-li"> PostgreSQL </li>
                      <li className="tech-skils-li"> JSON </li>
                      <li className="tech-skils-li"> RESTFUL API </li>
                      <li className="tech-skils-li"> Ruby </li>
                  </ul>
                  <ul style={{listStyle: "none"}} className="tech-skills-ul"> 
                    <u><h3 className="tech-title"> Development Tools & Methods: </h3></u>
                      <li className="tech-skils-li"> Git </li>
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
              jobName="Help Desk Support/ Web Developer"
              jobDescription={
                <ul>
                  <li>
                    Developed and maintained the company’s wordpress website, as well as utilized the wordpress code editor to make changes to the front-end and back-end.
                  </li>
                  <li>
                    Provided assistance to staff members with technological issues.
                  </li>
                </ul>
              }
            />
            <Experience 
              startYear={2019}
              endYear={2019}
              jobName="Canvas Course Web Developer"
              jobDescription={
                <ul>
                  <li>
                    Designed and structured Canvas courses for professors.
                  </li>
                  <li>
                    Collaborated with IT department in the utilization of an advanced code editor to visually enhance faculty's content with HTML and CSS.
                  </li>
                </ul>
              }
            />
          </Cell>
        </Grid>
      </div>
    )
  }
}

