import React from 'react'
import { Container, Row, Col, Card, CardBody, CardText, CardTitle, Button, CardSubtitle } from 'reactstrap'

const PROJECTS = [
    {
        name: 'NUTR1APP (Team Project)',
        description: 'Application that allows users to track nutrition while suggesting optimal workouts for their fitness goals.',
        thumbnail: '/assets/apple.jpg',
        github: 'https://github.com/BagelSeedz/NUTR1APP',
        tools: "Java, Spring, Git"
    },
    {
        name: 'Roblox Presence',
        description: 'An open source, lightweight integration that enables real-time project sharing.',
        thumbnail: '/assets/roblox-presence-icon.png',
        github: 'https://github.com/BagelSeedz/Roblox-Presence',
        tools: "C++, Lua, and Crow"
    },
    {
        name: 'Simon',
        description: 'Handheld device to help patients with dementia. This project is recreation of the Simon toy by Hasbro.',
        thumbnail: '/assets/simon.jpg',
        github: 'https://github.com/BagelSeedz/Simon',
        tools: "C++, Arduino, Embedded Engineering"
    },
    {
        name: 'Guild Organization System',
        description: 'Discord Bot for a 30,000+ member community that uses a Discord embed user interface that reads and writes to a database.',
        thumbnail: '/assets/python.png',
        github: 'https://github.com/BagelSeedz/Guild-Organization-System',
        tools: "Python, SQLite, Heroku"
    },
]

class Projects extends React.Component {
    render() {
        return (
            <Container style={{marginTop: '75px'}}>
                <Row>
                    <Col>
                        <h2 style={{textAlign: 'center', marginBottom: '50px'}} id="projects">Projects</h2>
                    </Col>
                </Row>
                <Row className='centerHorizontal'>
                    {PROJECTS.map((data, index) => (
                        <Project data={data} key={index}/>
                    ))}
                </Row>
            </Container>
        )
    }
}

class Project extends React.Component {
    render() {
        return (
            <Col xs='12' sm='4' md='3' style={{marginBottom: '30px'}}>
                <Card>
                    <img alt={this.props.data.name + "-Thumbnail"} src={this.props.data.thumbnail}/>
                    <CardBody>
                        <CardTitle style={{marginBottom: '10px'}} tag='h5'>{this.props.data.name}</CardTitle>
                        <CardSubtitle style={{marginBottom: '10px'}}>{this.props.data.tools}</CardSubtitle>
                        <CardText style={{marginBottom: '20px'}} tag='h6'>{this.props.data.description}</CardText>
                        <a href={this.props.data.github} className='center' style={{textDecoration: 'none'}}>
                            <Button color='info'><strong>GitHub</strong></Button>
                        </a>
                    </CardBody>
                </Card>
            </Col>
        )
    }
}

export default Projects;