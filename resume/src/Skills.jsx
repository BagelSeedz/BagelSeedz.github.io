import React from 'react'

class Skills extends React.Component {
    render() {
        return (
            <div className='center skills' id="skills">
                <div>
                    <h2 style={{textAlign: 'center', marginBottom: '70px'}}>Skills</h2>
                    <div className='grid-row'>
                        {this.props.languages.map((data, index) => (
                            <Skill data={data} key={index}/>
                        ))}
                    </div>
                    <div style={{height: '5px', width: '100%', backgroundColor: 'rgba(44, 44, 44, 1)', margin: '35px'}}/>
                    <div className='grid-row'>
                        {this.props.tech.map((data, index) => (
                            <Skill data={data} key={index}/>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

class Skill extends React.Component {
    render() {
        return (
            <div className='grid-item'>
                <a href={this.props.data.link}>
                    <img alt={this.props.data.name} src={this.props.data.image}/>
                </a>
                <h5>{this.props.data.name}</h5>
            </div>
        );
    }
}

export default Skills;