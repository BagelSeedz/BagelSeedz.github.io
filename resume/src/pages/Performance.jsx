import React from 'react';
import Calculator from '../Calculator';
import '../Performance.css';

class Performance extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            output: ""
        }

        this.updateOutput = this.updateOutput.bind(this);
    }

    updateOutput(output) {
        this.setState({
            output: output
        });
    }

    render() {
        return(
            <div className='center box-parent'>
                <h1>Performance Calculator</h1>
                <div className='pbox'>
                    <Calculator output={this.updateOutput}/>
                </div>
                <h1>{this.state.output}</h1>
            </div>
        );
    }
}

export default Performance;