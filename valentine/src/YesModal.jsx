import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Gifts from "./Gifts";

class YesModal extends React.Component {
    render() {
        return (
            <Modal isOpen={this.props.modalOpen}>
                <ModalHeader>Yippee!</ModalHeader>
                <ModalBody><Gifts/></ModalBody>
                <ModalFooter>
                    <h4>{'I love you :)'}</h4>
                    <Button onClick={this.props.toggle} color='secondary'>Exit</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

export default YesModal;