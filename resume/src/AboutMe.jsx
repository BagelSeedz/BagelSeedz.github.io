import React from "react";
import Galaxy from "./Galaxy"
import { Button } from 'reactstrap'

class AboutMe extends React.Component {
    render() {
        return (
            <div className='about-me' style={{height: "90vh"}}>
                <div className='center about-me-text'>
                    <div>
                        <h1>David Martinez</h1>
                        <h2>Software Engineer</h2>
                        <h3>Rochester, NY | 🇺🇸</h3>
                        <br/>
                        <h2>About Me</h2>
                        <p>
                            I am a third year software engineering major at the Rochester Institute of Technology. 
                            I create efficient solutions for clients as an <strong>independent software contractor. </strong> 
                            I am passionate about delivering quality software products to businesses and individuals.  
                        </p>
                        <a href='mailto:dam9187@rit.edu'>
                            <Button color='primary'>
                                Contact Me
                            </Button>
                        </a>                      
                    </div>
                </div>
                <div style={{width: '5%'}}/>
                <div className='galaxy-div'>
                    <Galaxy skills={this.props.skills}/>
                </div>
            </div>            
        );
    }
}

export default AboutMe;