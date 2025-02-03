import React from 'react'
import heartGif from './assets/heart.gif'
import noGif from './assets/no-emotiguy.gif'
import './Valentine.css'
import { Container, Row, Col, Button } from 'reactstrap'
// import { Button } from 'bootstrap'

const HEART_IMAGE = <img src={heartGif} alt='heartGif' width="100%" height="100%"/>
const NO_IMAGE = <img src={noGif} alt='heartGif' width="500px" height="500px"/>

class Valentine extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            saidNo: false
        }

        this.onSaidNo = this.onSaidNo.bind(this);
    }

    onSaidNo() {
        this.setState({saidNo: true});
    }

    render() {
        let saidNo = this.state.saidNo;
        return (
            <div className='bigDiv'>
                <Container>
                    <Row>
                        <Col xs='3'>{HEART_IMAGE}</Col>
                        <Col xs='6'>
                            <h1 className='bigText'>big text</h1>
                            <div className='buttons'>
                                <Button className='myButton' color='primary'>Yes</Button>
                                <Button className='myButton' color='secondary' onClick={this.onSaidNo}>No</Button>
                            </div>
                        </Col>
                        <Col xs='3'>{HEART_IMAGE}</Col>
                    </Row>
                    {(saidNo && <Row>
                        {NO_IMAGE}
                    </Row>)}
                </Container>
            </div>   
        )
    }
}

export default Valentine;
