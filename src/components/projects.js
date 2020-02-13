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
                Developed, tested and designed a Full-Stack application to effortlessly keep track of your weight lifting sessions. Tech:  React.js, JSON, Node.js, PostgreSQL, Express, CSS.
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
                  background:'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center/cover'
                }}>
                Spanish Spaced Repitition 
              </CardTitle>
              <CardText> 
                Built 
              </CardText>
              <CardActions border>
                <a href="https://github.com/thinkful-ei-iguana/Jack-Angel-Capstone-II-Frontend" target="_blank"><Button colored > GitHub </Button></a>
                <a href="https://spaced-repetition-ten.now.sh/register" target="_blank"><Button colored > Live Demo </Button></a>
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
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </CardText>
              <CardActions border>
                <a href="https://github.com/aliceaa396" target="_blank"><Button colored > GitHub </Button></a>
                <Button colored > Live Demo </Button>
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
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
                <Button colored > GitHub </Button>
                <Button colored > Live Demo </Button>
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
                <Button colored > GitHub </Button>
                <Button colored > Live Demo </Button>
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
