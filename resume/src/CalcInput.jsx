import React from 'react'
import { FormGroup, Label, Input } from 'reactstrap'

class CalcInput extends React.Component {
    render() {
        return (
            <FormGroup>
                <Label 
                    className="center" 
                    for="goal"
                >
                    <h5>{this.props.input}</h5>
                </Label>
                <Input 
                    className="form-input" 
                    id="goal"
                    placeholder={'Enter ' + this.props.input + ' here'}
                    type={this.props.type}
                    onChange={e => this.props.updateInput(this.props.stateKey, e.target.value)}
                    invalid={!this.props.valid}
                />
            </FormGroup>
        );
    }
}

export default CalcInput;