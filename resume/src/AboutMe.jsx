import React from "react";
import Galaxy from "./Galaxy"

class AboutMe extends React.Component {
    render() {
        return (
            <div className='center about-me' style={{height: "90vh"}}>
                <div className='center' style={{width: '35%'}}>
                    <div>
                        <h1>David Martinez</h1>
                        <h2>Software Engineer</h2>
                        <h3>Rochester, NY | 🇺🇸</h3>
                        <br/>
                        <h2>About Me</h2>
                        <p>
                            I am a third year software engineering major at the Rochester Institute of Technology. 
                            I create efficient solutions for clients as an <strong>independent software contractor. </strong> 
                            I am a passionate problem solver, game developer, and guitar enthusiast.
                        </p>
                        <a style={{textDecoration: 'none'}} href='mailto:dam9187@rit.edu'>Contact Me</a>
                    </div>
                </div>
                <di style={{width: '5%'}}v/>
                <div className='center' style={{width: '35%'}}>
                    <Galaxy skills={this.props.skills}/>
                </div>
            </div>            
        );
    }
}

export default AboutMe;