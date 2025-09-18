import React from 'react'
import { InputGroup, InputGroupText, Input, FormGroup, Label } from 'reactstrap'

class LBInput extends React.Component {
    render() {
        return(
            <FormGroup>
                <Label
                    className='center'
                    for='check'
                >
                    {this.props.name}
                </Label>
                <InputGroup 
                    id='check'
                    style={{
                        marginLeft: '25%',
                        width: '50%'
                    }}
                >
                    <InputGroupText>
                        <Input
                            addon
                            aria-label={"Checkbox for " + this.props.name}
                            type="checkbox"
                            onChange={e => this.props.updateToggle(this.props.stateKey, e.target.checked)}
                        />
                    </InputGroupText>
                    <Input 
                        defaultValue={this.props.default}
                        type="number"
                        onChange={e => this.props.updateInput(this.props.stateKey, e.target.value)}
                        invalid={!this.props.valid}
                    />
                </InputGroup>
            </FormGroup>
        );
    }
}

export default LBInput;