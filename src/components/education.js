import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl';

export default class Education extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <p className="user-info"> {this.props.startYear} - {this.props.endYear} </p>
          </Cell>
          <Cell col={8}>
            <u><h3 style={{marginTop: '0px'}}> {this.props.schoolName} </h3></u>
            <i><h5 style={{marginTop: '0px', fontWeight:"300"}}> {this.props.degreeDesc} </h5></i>
            <p className="user-info"> {this.props.schoolDescription} </p>
          </Cell>
        </Grid>
      </div>
    )
  }
}
