import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl';
import bitCropped from '../Images/bitCropped.png'

export default class AboutMe extends Component {
  render() {
    return (
      <div className="about-me-container">
        <Grid style={{marginBottom: "25px"}}> 
          <Cell col={4}>         
            <h2 className="qoute"> 
              "Hard work beats talent, when talent refuses to work hard..."
            </h2>
            
          </Cell>
          <Cell 
            className="aboutme-right-col" 
            col={8} 
            style={{
              background: "#c31432",
             
              borderRadius: "5px"
            }}>
            <div 
              style={{
                textAlign:'center'
              }}
            >
              <img 
                src={bitCropped}
                alt="avatar"
                style={{height: "200px"}}
              />  
            </div>
            <h4 style={{color: 'white'}}> AboutMe </h4>
            <hr style={{borderTop: '3px solid white'}} />
            <p className="aboutMeText">          
            I'm a strong believer that you are in full control of your happiness and destiny. At the age of 16, I wanted to pursue Criminal Justice and attend Law school. I began taking college courses in high school and even began studying for my LSAT's as a freshman in college. After seeing my tenacity and desire to become an attorney I was offered an internship at two Law Offices. After completing my internships, I realized that I was only in love with certain aspects of the career and that pursuing law wouldn't allow me to have the work-life balance I desired. Upon receiving my undergraduate degree from Rider University, I began to pursue my Master's Degree in Homeland Security with hopes of becoming a Cyber Security Software Developer. While in my first semester of graduate school, I began self-teaching myself Ruby, Javascript, and HTML. That's when I fell in love with web development and decided to research software engineering boot camps. My favorite aspects of web and software development are the constant challenges they present. During my time at Thinkful, there was no lack of new challenges to be faced. Although stressful, I embraced the opportunities with joy because the sense of accomplishment I feel when finally getting a program to work as anticipated is unparalleled. What I may lack in years of experience, I more than makeup for with undying work ethic and tenacity to do my absolute best. As I continue through my career I hope to also start my own fitness coaching business to help others achieve their ideal physiques.  

            </p>
          </Cell>
        </Grid>
      </div>
    )
  }
}

