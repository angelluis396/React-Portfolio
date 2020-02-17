import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl';

export default class Experience extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={8}>
            <h4 style={{marginTop: '0px'}}> {this.props.jobName} </h4>
            <p className="user-info"> {this.props.startYear} -h {this.props.endYear} </p>
            <p className="user-info"> {this.props.jobDescription} </p>
          </Cell>
          <Cell col={4}>
            
            
          </Cell>
        </Grid>
      </div>
    )
  }
}
