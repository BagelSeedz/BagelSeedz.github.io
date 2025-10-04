import React from 'react'
import { Container, Row, Col } from 'reactstrap'

class Skills extends React.Component {
    render() {
        return (
            <div className='center skills'>
                <Container>
                    <Row>
                        <Col>
                            <h2 style={{textAlign: 'center'}}>Skills</h2>
                        </Col>
                    </Row>
                    <Row className='centerHorizontal justify-content-around'>
                        {this.props.languages.map((data, index) => (
                            <Skill data={data} key={index}/>
                        ))}
                    </Row>
                    <Row>
                        <Col className='center'>
                            <div style={{height: '5px', width: '100%', backgroundColor: 'rgba(44, 44, 44, 1)', margin: '30px'}}/>
                        </Col>
                    </Row>
                    <Row className='centerHorizontal justify-content-around'>
                        {this.props.tech.map((data, index) => (
                            <Skill data={data} key={index}/>
                        ))}
                    </Row>
                </Container>
            </div>
        )
    }
}

class Skill extends React.Component {
    render() {
        return (
            <Col xs='3' md='1'>
                <h4 style={{width: '100%', textAlign: 'center'}}>{this.props.data.name}</h4>
                <a href={this.props.data.link}>
                    <img style={{width: '100%'}} alt={this.props.data.name} src={this.props.data.image}/>
                </a>
            </Col>
        );
    }
}

export default Skills;