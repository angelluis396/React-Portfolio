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
              <h5> Address</h5>
                <p className="user-info"> 1 HAcker Way</p>
              <h5> Email </h5>
                <p className="user-info"> blah@aol.com</p>
              <h5> Web </h5>
                <p className="user-info"> www.hi.com</p>
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
                schoolDescription="Engineering Immersion"
              />
              <Education 
                startYear={2014}
                endYear={2018}
                schoolName="Rider University"
                schoolDescription="Bachelor's Degree in Criminal Justice"
              />
              <hr style={{borderTop: '3px solid white'}}/>
            <h2> Experience </h2>
            <Experience 
              startYear={2015}
              endYear={2019}
              jobName="Help Desk Support"
              jobDescription="Lorem Ipsum"
            
            />
            <Experience 
              startYear={2015}
              endYear={2019}
              jobName="Help Desk Support"
              jobDescription="Lorem Ipsum"
            />
            <hr style={{borderTop: '3px solid white'}}/>
            <h2> Technical Skills </h2>
          </Cell>
        </Grid>
      </div>
    )
  }
}

