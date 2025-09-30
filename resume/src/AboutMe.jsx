import React from "react";
import Galaxy from "./Galaxy"

class AboutMe extends React.Component {
    render() {
        return (
            <div className='center' style={{height: "90vh"}}>
                <div className='center' style={{width: '35%'}}>
                    <div>
                        <h1>David Martinez</h1>
                        <h2>Software Engineer</h2>
                        <h3>Rochester, NY | 🇺🇸</h3>
                        <br/>
                        <h2>About Me</h2>
                        {/* <p>An originally self-taught software and game developer studying Software Engineering at RIT.</p> */}
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt iste ut libero! Rem, dolorem necessitatibus! Recusandae voluptatibus rem deserunt labore sint porro iure soluta repellat eos odit. Temporibus, praesentium quas!</p>
                    </div>
                </div>
                <di style={{width: '5%'}}v/>
                <div className='center' style={{width: '35%'}}>
                    {/* <img style={{height: "auto", maxWidth: "100%"}} alt='pfp' src='assets/me.png'/> */}
                    {/* <App/> */}
                    <Galaxy skills={this.props.skills}/>
                </div>
            </div>            
        );
    }
}

export default AboutMe;