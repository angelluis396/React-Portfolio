import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardMenu, IconButton, CardText, Button } from 'react-mdl'

export default class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
       activeTab: 0
    }
  }
  
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
            <Card classname="projects-card" shadow={5} 
              style={{
                minWidth:'450', 
                margin:'auto',
                marginBottom: "15px"
              }}>
              <CardTitle 
              style={{color: '#fff', height: '176px', background:'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center/cover'}}
              >
                Fitpad 
              </CardTitle>
              <CardText> 
                Developed, tested and designed a Full-Stack application to effortlessly keep track of your weight lifting sessions. The technologies used to build this application include React, JSON, Node, PostgreSQL, Express, and CSS.
              </CardText>
              <CardActions border>
                 <a href="https://github.com/aliceaa396" target="_blank"><Button colored > GitHub </Button></a>
                 <a href="https://spaced-repetition-ten.now.sh/register" target="_blank"><Button colored > Live Demo </Button></a>
              </CardActions>
              <CardMenu style={{
                color: '#fff'
              }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          
          {/* Project 2 */}

          <Card shadow={5} 
            style={{
              minWidth:'450',
              margin:'auto',
              marginBottom: "15px"
            }}>
              <CardTitle 
                style={{
                  color: '#fff', 
                  height: '176px', 
                  background:'url(https://i.ibb.co/d03h8Kd/spanishspacedreps.png) center/cover'
                }}>
                Spanish Spaced Repitition 
              </CardTitle>
              <CardText> 
                Designed and developed a Full-Stack application that utilizes spaced repetition to teach users a new language. The technologies used to build this application include React, CSS, Node, as well as PostgreSQL. 
              </CardText>
              <CardActions border>
                <a href="https://github.com/thinkful-ei-iguana/Jack-Angel-Capstone-II-Frontend" target="_blank"><Button colored > GitHub </Button></a>
                <a href="https://spaced-repetition-ten.now.sh/" target="_blank"><Button colored > Live Demo </Button></a>
              </CardActions>
              <CardMenu 
                style={{
                  color: '#fff'
                }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            {/* Project 3 */}
            <Card shadow={5} 
              style={{
                minWidth:'450', 
                margin:'auto',
                marginBottom: "15px"
              }}>
              <CardTitle 
                style={{
                  color: '#fff', 
                  height: '176px', 
                  background:'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center/cover'
                }}>   
                SuperHumans 
              </CardTitle>
              <CardText> 
                Developed and designed this application to allow users to be able to search for their favorite super hero or super villain and display intresting facts about them. The technologies utilized to create this application include React, CSS and REST API's.
              </CardText>
              <CardActions border>
                <a href="https://github.com/aliceaa396/SuperHumans-API" target="_blank"><Button colored > GitHub </Button></a>
                <a href="https://superhumans-app.ala31996.now.sh/" target="_blank"> <Button colored > Live Demo </Button> </a>
              </CardActions>
              <CardMenu style={{
                color: '#fff'
              }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            {/* Project 4 */}
            <Card shadow={5} 
              style={{
                minWidth:'450', 
                margin:'auto',
                marginBottom: '15px'
              }}>
              <CardTitle 
                style={{
                  color: '#fff', 
                  height: '176px', 
                  background:'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center/cover'
              }}>
                Frenmo
              </CardTitle>
              <CardText> 
                Coming Soon!
              </CardText>
              <CardActions border>
                <a href="https://github.com/aliceaa396" target="_blank"><Button colored > GitHub </Button></a>
                <a href="https://spaced-repetition-ten.now.sh/" target="_blank"><Button colored > Live Demo </Button></a>
              </CardActions>
              <CardMenu style={{
                color: '#fff'
              }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
        </div>
        
        
      )
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          
            <Card shadow={5} 
              style={{
                minWidth:'450', 
                margin:'auto',
                marginBottom: "15px"
              }}>
              <CardTitle 
                style={{
                  color: '#fff',
                  height: '176px', 
                  background:'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center/cover'
                }}
              >
                Sharkmarks 
              </CardTitle>
              <CardText> 
                Designed and developed a bookmarking application that keeps track of your favorite websites.Tech:  jQuery, HTML, CSS, REST API.
              </CardText>
              <CardActions border>
                <a href="https://github.com/thinkful-ei-iguana/Angel_Bookmarks_App" target="_blank"><Button colored > GitHub </Button></a>
                <a href="https://thinkful-ei-iguana.github.io/Angel_Bookmarks_App/" target="_blank"><Button colored > Live Demo </Button></a>
              </CardActions>
              <CardMenu 
                style={{
                  height:"176px", 
                  color: '#fff',
                  marginBottom: "15px"
                }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
        
            <Card shadow={5} 
              style={{
                minWidth:'450', 
                margin:'auto',
                marginBottom: "15px"
              }}>
              <CardTitle 
                style={{
                  color: '#fff', 
                  height: '176px', 
                  background:'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center/cover'
              }}>
                Matrix Quiz 
              </CardTitle>
              <CardText> 
                Built a quiz application to test a user’s knowledge of the Matrix Films. Tech:  jQuery, HTML, CSS, REST API.  
              </CardText>
              <CardActions border>
                <a href="https://github.com/aliceaa396/Mason_Angel_Quiz_App" target="_blank"><Button colored > GitHub </Button></a>
                <a href="https://thinkful-ei-iguana.github.io/Mason_Angel_Quiz_App/" target="_blank"><Button colored > Live Demo </Button></a>
              </CardActions>
              <CardMenu 
                style={{
                  height:"176px",
                  color: '#fff'
                }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
        
        </div>
      )
    }
  }
  

  render() {
    return (
      <div className="category-tabs">
        <Tabs 
          activeTab={this.state.activeTab} 
          onChange={(tabId) => this.setState({activeTab: tabId})} 
          ripple
          style={{margin: "10px"}}
        >
          <Tab style={{color:"#fff"}}> React </Tab>
            
          <Tab style={{color:"#fff"}}> jQuery </Tab>
        </Tabs>
          
            <Grid style={{width: "auto"}}>
              <Cell col={12}
                style={{
                  justifyContent:"center",
                  
                }}>
                <div className="content">
                  {this.toggleCategories()}  
                </div>
              </Cell>
            </Grid>
          
      </div>
    )
  }
}
