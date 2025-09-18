import React from 'react'
import CalcInput from './CalcInput';
import LBInput from './LBInput';
import { Button, Container, Row, Col } from 'reactstrap'
import Calculate from "./Calculate"

function convertTimeToMinutes(time) {
    const [hours, minutes] = time.split(":").map(Number); // Split and convert to numbers
    return hours * 60 + minutes; // Calculate total minutes
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                lunch: 30,
                break: 15,
                start: null,
                end: null,
                units: null,
                standard: null
            },
            validations: {
                lunch: true,
                break: true,
                start: true,
                end: true,
                units: true,
                standard: true
            },
            toggles: {
                lunch: false,
                break: false,
            }
        }

        this.onCalculate = this.onCalculate.bind(this);
        this.validateInputs = this.validateInputs.bind(this);
        this.updateInput = this.updateInput.bind(this);
        this.updateToggle = this.updateToggle.bind(this);
    }

    updateInput(updateKey, value) {
        const newState = {
            inputs: {},
            validations: this.state.validations,
            toggles: this.state.toggles
        }
        Object.keys(this.state.inputs).forEach((key) => {
            newState.inputs[key] = (key === updateKey ? value: this.state.inputs[key]);
        });
        this.setState(newState);
    }

    updateToggle(updateKey, value) {
        const newState = {
            inputs: this.state.inputs,
            validations: this.state.validations,
            toggles: {}
        }
        Object.keys(this.state.toggles).forEach((key) => {
            newState.toggles[key] = (key === updateKey ? value : this.state.toggles[key]);
        });
        this.setState(newState);
    }

    validateInputs() {
        const inputs = this.state.inputs;
        const newState = {
            inputs: inputs,
            validations: {
                lunch: ((!this.state.toggles.lunch) || (inputs.lunch !== "" && !isNaN(inputs.lunch) && inputs.lunch >= 0)),
                break: ((!this.state.toggles.break) || (inputs.break !== "" && !isNaN(inputs.break) && inputs.break >= 0)),
                start: (inputs.start != null),
                end: (inputs.end != null),
                units: (inputs.units != null && !isNaN(inputs.units)),
                standard: (inputs.standard != null && !isNaN(inputs.standard))
            },
            toggles: this.state.toggles
        }
        this.setState(newState);

        var valid = true;
        Object.keys(newState.validations).forEach((key) => {
            if (!newState.validations[key]) {
                valid = false;
                return;
            }
        });
        
        return valid;
    }

    onCalculate() {
        const valid = this.validateInputs();
        if (!valid)
            return;

        const performance = Calculate(
            convertTimeToMinutes(this.state.inputs.start),
            convertTimeToMinutes(this.state.inputs.end),
            parseInt(this.state.inputs.units),
            parseInt(this.state.inputs.standard),
            (this.state.toggles.lunch ? this.state.inputs.lunch : 0),
            (this.state.toggles.break ? this.state.inputs.break : 0)
        );
        this.props.output("Performance: " + performance.toString() + "%");
    }

    render() {
        return (
            <>
                <Container style={{
                    'marginTop': '10px',
                    'marginBottom': '10px',
                    'width': '90%'
                }}>
                    <Row xs="2">
                        <Col>
                            <LBInput 
                                name='Lunch (mins)' 
                                default={this.state.inputs.lunch}
                                stateKey='lunch'
                                updateInput={this.updateInput}
                                updateToggle={this.updateToggle}
                                valid={this.state.validations.lunch}
                            />
                        </Col>
                        <Col>
                            <LBInput 
                                name='Break (mins)' 
                                default={this.state.inputs.break}
                                stateKey='break'
                                updateInput={this.updateInput}
                                updateToggle={this.updateToggle}
                                valid={this.state.validations.break}
                            />
                        </Col>
                        <Col>
                            <CalcInput 
                                input='Shift Start' 
                                type="time"
                                stateKey='start'
                                updateInput={this.updateInput}
                                valid={this.state.validations.start}
                            />
                        </Col>
                        <Col>
                            <CalcInput 
                                input='Shift End' 
                                type="time"
                                stateKey='end'
                                updateInput={this.updateInput}
                                valid={this.state.validations.end}
                            />
                        </Col>
                        <Col>
                            <CalcInput 
                                input='Units' 
                                type="number"
                                stateKey='units'
                                updateInput={this.updateInput}
                                valid={this.state.validations.units}
                            />
                        </Col>
                        <Col>
                            <CalcInput 
                                input='Standard (U/min)' 
                                type="number"
                                stateKey='standard'
                                updateInput={this.updateInput}
                                valid={this.state.validations.standard}
                            />
                        </Col>
                    </Row>
                </Container>
                <div className='center'>
                    <Button
                        color="primary"
                        onClick={this.onCalculate}
                    >
                        Calculate
                    </Button>
                </div>
            </>
        );
    }
}

export default Calculator;