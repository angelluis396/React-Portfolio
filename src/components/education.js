import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl';

export default class Education extends Component {
  render() {
    return (
      <div>
        <Grid>
          
          <Cell col={8}>
            <u><h3 className="edu-title" style={{marginTop: '0px'}}> {this.props.schoolName} </h3></u>
            <p className="user-info-year"> {this.props.startYear} - {this.props.endYear} </p>
            <h5 classnName="edu-subtitle" style={{marginTop: '0px', fontWeight:"300"}}> {this.props.degreeDesc} </h5>
            <p className="user-info"> {this.props.schoolDescription} </p>
          </Cell>
          <Cell col={4}>
            
          </Cell>
        </Grid>
      </div>
    )
  }
}
