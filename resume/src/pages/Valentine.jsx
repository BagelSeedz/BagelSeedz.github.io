import React from 'react'
import heartGif from '../assets/heart.gif'
import noGif from '../assets/no-emotiguy.gif'
import '../Valentine.css'
import { Container, Row, Col, Button } from 'reactstrap'
import YesModal from '../YesModal'

const HEART_IMAGE = <img src={heartGif} alt='heart gif' width="100%" height="100%"/>
const NO_IMAGE = <img src={noGif} alt='no gif' width="500px" height="500px"/>

class Valentine extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            saidNo: false,
            modalOpen: false
        }

        this.onSaidNo = this.onSaidNo.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    onSaidNo() {
        this.setState({saidNo: true});
    }

    toggleModal() {
        console.log("silly toggle fired")
        this.setState(prevState => ({
            ...prevState,
            modalOpen: !this.state.modalOpen
        }));
    }

    render() {
        let saidNo = this.state.saidNo;
        return (
            <div className='bigDiv'>
                <Container>
                    <Row>
                        <Col xs='3'>{HEART_IMAGE}</Col>
                        <Col xs='6'>
                            <h1 className='bigText'>Will you be my valentine?</h1>
                            <div className='buttons'>
                                <Button className='myButton' color='primary' onClick={this.toggleModal}>Yes</Button>
                                <Button className='myButton' color='secondary' disabled={saidNo} onClick={this.onSaidNo}>No</Button>
                            </div>
                        </Col>
                        <Col xs='3'>{HEART_IMAGE}</Col>
                    </Row>
                    {(saidNo && <Row>
                        {NO_IMAGE}
                    </Row>)}
                </Container>

                <YesModal modalOpen={this.state.modalOpen} toggle={this.toggleModal}/>
            </div>   
        )
    }
}

export default Valentine;
