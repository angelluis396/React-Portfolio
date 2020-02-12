import React, { Component } from 'react'
import { Grid, Cell, List,ListItem, ListItemContent } from 'react-mdl'

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2> Angel L. Alicea </h2>

            <img
              src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
              alt="avatar"
              style={{height: "250px"}}
            />
            <p style={{width: "75%", margin: "auto", paddingTop: "1em",}}> Lorem Ipsum Dim Sum </p>

          </Cell>
          <Cell col={6}>
            <h2> Get In Touch! </h2>
              
            <hr/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px'}}>
                    <a href="https://www.linkedin.com/in/angel-alicea-iii/" rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-linkedin" aria-hidden="true"/>
                    </a>

                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px'}}>
                    <a href = "mailto: ala31996@gmail.com">
                    <i className="fa fa-envelope-square"/>
                    </a>
                  </ListItemContent>
                </ListItem>

              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

