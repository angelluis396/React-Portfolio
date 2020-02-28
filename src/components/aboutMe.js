import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl';
import bitCropped from '../Images/bitCropped.png'

export default class AboutMe extends Component {
  render() {
    return (
      <div className="about-me-container">
        <Grid> 
          <Cell col={4}>         
            <h2 className="qoute"> 
              "Hard work beats talent, when talent refuses to work hard..."
            </h2>
            
          </Cell>
          <Cell 
            className="resume-right-col" 
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
            <p>          
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </Cell>
        </Grid>
      </div>
    )
  }
}

