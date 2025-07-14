import React from 'react'
import { Button, Container, Row, Col } from 'reactstrap';

const POPPER_IMAGE = <img src='/assets/partypopper.gif' alt='party popper gif' width="100%" height="100%"/>
const GIFT_IMAGE = <img src='/assets/gift.gif' alt='gift gif' width="100%" height="100%"/>
const GIFT1 = <img src='/assets/gift1.jpg' alt='eyeliner' width="100%" height="100%"/>
const GIFT2 = <img src='/assets/gift2.jpg' alt='rose toy' width="100%" height="100%"/>
const GIFT3 = <img src='/assets/gift3.jpg' alt='olive garden' width="100%" height="100%"/>

class Gifts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            giftsOpen: [
                false,
                false,
                false
            ]
        }

        this.giftClicked = this.giftClicked.bind(this);
    }

    giftClicked(giftNum) {
        this.setState({
            giftsOpen: [
                (giftNum === 0 ? true : this.state.giftsOpen[0]),
                (giftNum === 1 ? true : this.state.giftsOpen[1]),
                (giftNum === 2 ? true : this.state.giftsOpen[2])
            ]
        })
    }
    
    render() {
        return (
            <Container>
                <Row>
                    <Col xs='3'>{POPPER_IMAGE}</Col>
                    <Col xs='6'>
                        <h3>Click to open your gifts</h3>
                        <div className='buttons'>
                            <Button onClick={() => this.giftClicked(0)} color="primary" className="p-0 border-0" style={{ background: "none" }}>
                                {this.state.giftsOpen[0] ? GIFT1 : GIFT_IMAGE}
                            </Button>
                            <Button onClick={() => this.giftClicked(1)} color="primary" className="p-0 border-0" style={{ background: "none" }}>
                                {this.state.giftsOpen[1] ? GIFT2 : GIFT_IMAGE}
                            </Button>
                            <Button onClick={() => this.giftClicked(2)} color="primary" className="p-0 border-0" style={{ background: "none" }}>
                                {this.state.giftsOpen[2] ? GIFT3 : GIFT_IMAGE}
                            </Button>
                        </div>
                    </Col>
                    <Col xs='3'>{POPPER_IMAGE}</Col>
                </Row>
            </Container>
        )
    }
}

export default Gifts;